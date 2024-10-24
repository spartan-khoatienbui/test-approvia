import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import applyCaseMiddleware from "axios-case-converter";

import {
  ACCESS_TOKEN_KEY,
  ERROR_NO_ACCESS_TOKEN_FOUND,
  REFRESH_TOKEN_ENDPOINT,
} from "@/auth/constants/auth.constant";
import { handleSessionExpired, refreshToken } from "@/auth/services/auth.service";
import { AuthClientState } from "@/auth/types/auth.type";
import { API_ENDPOINT, API_ICONS_ENDPOINT } from "@config/env.config";

// --------- REQUESTS INTERCEPTORS ---------
async function ensureRefreshTokenCompleted(
  _config: InternalAxiosRequestConfig,
  state: AuthClientState
) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) {
    state.refreshToken ??= refreshToken();
  }
  await state.refreshToken;
  state.refreshToken = null;
}

async function attachAccessToken(config: InternalAxiosRequestConfig, _state: AuthClientState) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    console.error(ERROR_NO_ACCESS_TOKEN_FOUND);
    throw new Error(ERROR_NO_ACCESS_TOKEN_FOUND);
  }

  config.headers["Authorization"] = `Bearer ${accessToken}`;
}
// --------- RESPONSE INTERCEPTORS ---------
function handleError401(
  error: AxiosError | AxiosResponse,
  client: AxiosInstance,
  state: AuthClientState
) {
  const originalRequest: InternalAxiosRequestConfig & { _hasRetry?: boolean } = error.config!;

  if (originalRequest.url === REFRESH_TOKEN_ENDPOINT) {
    return handleSessionExpired();
  }

  if (originalRequest._hasRetry) {
    return Promise.reject(error);
  }

  state.refreshToken ??= refreshToken();
  originalRequest._hasRetry = true;

  return client(originalRequest);
}

// -----------------------------------------

function createBaseClient(baseURL = API_ENDPOINT) {
  const client = applyCaseMiddleware(axios.create({ baseURL }), {
    ignoreHeaders: true,
  });

  return client;
}

function createAuthClient() {
  const client = createBaseClient();
  const state: AuthClientState = { refreshToken: null };

  client.interceptors.request.use(
    async (config) => {
      await ensureRefreshTokenCompleted(config, state);
      await attachAccessToken(config, state);

      return config;
    },
    (error) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      switch (error.response?.status) {
        case 401:
          return handleError401(error, client, state);

        case 400:
        case 403:
        default:
          return Promise.reject(error);
      }
    }
  );

  return client;
}

export const baseClient = createBaseClient();
export const client = createAuthClient();
export const iconClient = axios.create({ baseURL: API_ICONS_ENDPOINT });
