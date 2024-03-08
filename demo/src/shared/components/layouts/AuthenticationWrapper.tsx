import { Outlet, useNavigate } from 'react-router-dom';
import { useMount } from 'react-use';

import { HOME_ROUTE } from '~routers/constants';
import { inMemoryJWTService } from '~shared/services';

const AuthenticationWrapper = () => {
  const navigate = useNavigate();
  useMount(() => {
    inMemoryJWTService
      .getNewAccessToken()
      .then(() => {
        navigate(HOME_ROUTE, { replace: true });
      })
      .catch(() => {
        // Do nothing
      });
  });

  // If not authenticated, redirect to this page to login/register
  return <Outlet />;
};

export default AuthenticationWrapper;
