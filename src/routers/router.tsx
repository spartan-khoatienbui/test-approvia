import { lazy, Suspense } from 'react';
import { createBrowserRouter, defer, Navigate, Outlet } from 'react-router-dom';

import { HOME_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE, SIGNUP_ROUTE, USER_ROUTE } from './constants';

import {
  AuthenticatedLayout,
  AuthLayout,
  AuthProvider,
  DashboardLayout,
  inMemoryJWTService,
  RequireAuth,
} from '~shared';

export const LoginPage = lazy(() => import('~modules/login'));
export const UserPage = lazy(() => import('~modules/user'));
export const OverviewPage = lazy(() => import('~modules/overview'));
export const Page404 = lazy(() => import('~shared/pages/NotFoundPage'));

// ----------------------------------------------------------------------

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    loader: async () => {
      const userPromise = inMemoryJWTService.getNewAccessToken();

      return defer({
        userPromise,
      });
    },
    children: [
      {
        path: HOME_ROUTE,
        element: (
          <RequireAuth>
            <DashboardLayout>
              <Suspense>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          </RequireAuth>
        ),
        children: [
          { element: <OverviewPage />, index: true },
          { path: USER_ROUTE, element: <UserPage /> },
        ],
      },
    ],
  },
  {
    element: <AuthenticatedLayout />,
    children: [
      {
        path: LOGIN_ROUTE,
        element: (
          <AuthProvider>
            <LoginPage />
          </AuthProvider>
        ),
      },
      {
        path: SIGNUP_ROUTE,
        element: <></>,
      },
    ],
  },
  {
    path: NOT_FOUND_ROUTE,
    element: <Page404 />,
  },
  {
    path: '*',
    element: <Navigate to={NOT_FOUND_ROUTE} replace />,
  },
]);
