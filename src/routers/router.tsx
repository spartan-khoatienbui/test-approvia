import { lazy, Suspense } from 'react';
import { defer, Navigate, Outlet, useRoutes } from 'react-router-dom';

import { AuthLayout, DashboardLayout, inMemoryJWTService } from '~shared';
import { AuthProvider, RequireAuth } from '~shared/providers/AuthProvider';

export const OverviewPage = lazy(() => import('~modules/overview'));
export const Page404 = lazy(() => import('~shared/pages/NotFoundPage'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
<<<<<<< HEAD
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [{ element: <OverviewPage />, index: true }],
=======
      element: <AuthLayout />,
      loader: async () => {
        const userPromise = inMemoryJWTService.getNewAccessToken();

        return defer({
          userPromise,
        });
      },
      children: [
        {
          path: '/',
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
            { path: 'user', element: <UserPage /> },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: (
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      ),
>>>>>>> 92d26ae (Add auth router)
    },

    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
