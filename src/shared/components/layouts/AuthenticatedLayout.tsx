import { Navigate, Outlet } from 'react-router-dom';

import { HOME_ROUTE } from '~routers/constants';
import { inMemoryJWTService } from '~shared/services';

const AuthenticatedLayout = () => {
  // Check if user is already authenticated
  if (inMemoryJWTService.getToken()) {
    // If not authenticated, redirect to this page to login/register
    return <Outlet />;
  }

  // If authenticated, navigate to the home page
  return <Navigate to={HOME_ROUTE} replace={true} />;
};

export default AuthenticatedLayout;
