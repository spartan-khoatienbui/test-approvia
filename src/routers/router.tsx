import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

export const LoginPage = lazy(() => import('~modules/login'));
export const Page404 = lazy(() => import('~shared/pages/NotFoundPage'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LoginPage />,
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
