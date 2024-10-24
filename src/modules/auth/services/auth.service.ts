import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/auth/constants/auth.constant";
import { baseClient } from "@/auth/services/client.service";
import { AuthProvider, LoginResponse, RefreshTokenResponse } from "@/auth/types/auth.type";

export async function getAuthRedirectUrl(provider: AuthProvider) {
  const { data } = await baseClient<{ message: string }>({
    method: "GET",
    url: `/api/auth/login/${provider}`,
  });

  return { url: data.message };
}

export async function loginWithProvider(provider: AuthProvider, code: string) {
  const { data } = await baseClient<LoginResponse>({
    method: "POST",
    url: `/api/auth/login/${provider}`,
    data: { code },
  });

  localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
}

export async function loginWithPassword(email: string, password: string) {
  const { data } = await baseClient<LoginResponse>({
    method: "POST",
    url: "/api/auth/login",
    data: { email, password },
  });

  localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
}

export async function refreshToken() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

  if (!refreshToken) return null;

  const { data } = await baseClient<RefreshTokenResponse>({
    method: "POST",
    url: "/auth/refresh-token",
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);

  return data;
}

export async function logout() {
  const { data } = await baseClient<{ message: string }>({
    method: "POST",
    url: "/api/auth/logout",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(REFRESH_TOKEN_KEY)}`,
    },
  });

  handleSessionExpired();

  window.location.href = "/";
  return data;
}

export function handleSessionExpired() {
  sessionStorage.clear();
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}
