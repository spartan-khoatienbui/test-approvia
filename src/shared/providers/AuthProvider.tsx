import React, { useCallback, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { createContext, useContext } from 'use-context-selector';

import { axiosClient, inMemoryJWTService } from '..';

interface AuthContextType {
  signIn: (credential: Record<string, unknown>) => Promise<void>;
  signOut: () => void;
  clearUserInfo: () => void;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => Promise.resolve(),
  signOut: () => null,
  clearUserInfo: () => null,
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signIn = useCallback(
    async (credential: Record<string, unknown>) => {
      const { data } = await axiosClient.post('/login', {
        username: credential.email,
        password: credential.password,
      });
      const { accessToken, refreshToken, expiresIn } = data;
      inMemoryJWTService.setToken(accessToken, expiresIn);
      inMemoryJWTService.setRefreshToken(refreshToken);
      queryClient.resetQueries();
      navigate('/', { replace: true });
    },
    [navigate, queryClient]
  );

  const clearUserInfo = () => {
    inMemoryJWTService.eraseToken();
    sessionStorage.clear();
  };

  const signOut = useCallback(() => {
    navigate('/login', { replace: true });
  }, [navigate]);

  const value = useMemo(() => ({ signIn, signOut, clearUserInfo }), [signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

type RequireAuthProps = {
  children: JSX.Element;
};

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  if (!inMemoryJWTService.getToken()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};
