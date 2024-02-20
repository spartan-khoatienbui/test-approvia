import { createBrowserRouter } from 'react-router-dom';

import { SignInPage } from '~modules/sign-in';
import { Demo } from '~shared/components';

export const router = createBrowserRouter([
  {
    path: '/demo',
    element: <SignInPage />,
  },
  {
    path: '/',
    element: <Demo />,
  },
]);
