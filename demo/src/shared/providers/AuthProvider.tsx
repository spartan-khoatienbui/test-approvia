import React, { FC, useCallback, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { createContext, useContext } from 'use-context-selector';

import { axiosClient, inMemoryJWTService } from '..';

import { HOME_ROUTE, LOGIN_ROUTE } from '~routers';

interface IAuthContext {
  signIn: (credential: Record<string, unknown>) => Promise<void>;
  signOut: () => void;
  clearUserInfo: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signIn = useCallback(
    async (credential: Record<string, unknown>) => {
      try {
        const { data } = await axiosClient.post('/login', {
          username: credential.email,
          password: credential.password,
        });

        const { accessToken, refreshToken, expiresIn } = data;

        inMemoryJWTService.setToken(accessToken, expiresIn);
        inMemoryJWTService.setRefreshToken(refreshToken);

        queryClient.resetQueries();

        navigate(HOME_ROUTE, { replace: true });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    [navigate, queryClient]
  );

  const clearUserInfo = () => {
    inMemoryJWTService.eraseToken();
    sessionStorage.clear();
  };

  const signOut = useCallback(() => {
    clearUserInfo();
    navigate(LOGIN_ROUTE, { replace: true });
  }, [navigate]);

  const value = useMemo(() => ({ signIn, signOut, clearUserInfo }), [signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

type RequireAuthProps = {
  children: JSX.Element;
};

export const AccessRestrictedWrapper: FC<RequireAuthProps> = ({ children }) => {
  if (!inMemoryJWTService.getToken()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={LOGIN_ROUTE} replace={true} />;
  }

  return children;
};
