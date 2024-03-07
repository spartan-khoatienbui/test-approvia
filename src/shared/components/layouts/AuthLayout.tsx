import { Suspense } from 'react';
import { Await, Navigate, Outlet, useLoaderData } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import { AuthProvider } from '~shared';

const AuthLayout = () => {
  const { userPromise } = useLoaderData() as {
    userPromise: Promise<unknown>;
  };

  return (
    <Suspense fallback={<LinearProgress />}>
      <Await resolve={userPromise} errorElement={<Navigate to={'/login'} replace />}>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </Await>
    </Suspense>
  );
};

export default AuthLayout;
