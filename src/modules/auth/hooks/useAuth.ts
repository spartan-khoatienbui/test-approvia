import { useAtom } from "jotai";

import { useGetMe } from "~/__generated__/hooks/useGetMe";
import { getAuthRedirectUrl, loginWithProvider, logout } from "~/auth/services/auth.service";
import { authAtom } from "~/auth/stores/auth.store";
import { AuthProvider } from "~/auth/types/auth.type";
import { useNotification } from "~shared/hooks/useNotification";

// MOCKS

//

export function useAuth() {
  const { showError } = useNotification();
  const [auth, setAuth] = useAtom(authAtom);

  const getMe = useGetMe({ enabled: false });

  const isAuthenticated = async () => {
    if (auth.isLoaded) return !!auth.user;

    const user = (await getMe.refetch()).data;
    setAuth({ user });

    return !!user;
  };

  const redirectWithProvider = async (provider: AuthProvider) => {
    const { url } = await getAuthRedirectUrl(provider);
    window.location.href = url;
  };

  const signIn = async (info: { provider: AuthProvider; code: string } | { email: string; password: string }) => {
    if ("provider" in info) {
      const { provider, code } = info;
      await loginWithProvider(provider, code).catch(showError);
      const { data } = await getMe.refetch();
      setAuth({ user: data });

      return data;
    }
  };

  const signOut = async () => {
    await logout();
    setAuth({ user: undefined });
  };

  return Object.assign(auth, {
    isAuthenticated,
    redirectWithProvider,
    signIn,
    signOut,
  });
}
