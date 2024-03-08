import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

import { NOT_FOUND_ROUTE } from './constants';

import { DashboardLayout } from '~shared';

export const OverviewPage = lazy(() => import('~modules/overview'));
export const Page404 = lazy(() => import('~shared/pages/NotFoundPage'));

// ----------------------------------------------------------------------

export const router = createBrowserRouter([
  {
    element: (
      <DashboardLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [{ element: <OverviewPage />, index: true }],
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
