import { REFRESH_TOKEN_KEY } from "~/auth/constants/auth.constant";
import { jwtStorage } from "~/auth/services/jwt-storage.service";
import { AuthProvider, LoginResponse, RefreshTokenResponse } from "~/auth/types/auth.type";
import { baseClient } from "~shared/utils/api-client.util";

export async function getAuthRedirectUrl(provider: AuthProvider) {
  const { data } = await baseClient<string>({
    method: "GET",
    url: `/api/auth/sign-in/${provider}`,
  });

  return { url: data };
}

export async function loginWithProvider(provider: AuthProvider, code: string) {
  const { data } = await baseClient<LoginResponse>({
    method: "POST",
    url: `/api/auth/sign-in/${provider}`,
    data: { code },
  });

  jwtStorage.set(data.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);

  return data;
}

export async function loginWithPassword(email: string, password: string) {
  const { data } = await baseClient<LoginResponse>({
    method: "POST",
    url: "/api/auth/login",
    data: { email, password },
  });

  jwtStorage.set(data.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
}

export async function refreshToken() {
  try {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (!refreshToken) return null;

    const { data } = await baseClient<RefreshTokenResponse>({
      method: "POST",
      url: "/api/auth/refresh-token",
      data: {
        refreshToken,
      },
    });

    jwtStorage.set(data.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);

    return data;
  } catch (error) {
    handleSessionExpired();
    window.location.href = "/sign-in";
    throw error;
  }
}

export async function logout() {
  const { data } = await baseClient<{ message: string }>({
    method: "POST",
    url: "/api/auth/sign-out",
    headers: {
      Authorization: `Bearer ${jwtStorage.get()}`,
    },
  });

  handleSessionExpired();

  window.location.href = "/";
  return data;
}

export function handleSessionExpired() {
  sessionStorage.clear();
  jwtStorage.clear();
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}
