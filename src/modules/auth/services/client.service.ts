import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import {
  ERROR_NO_ACCESS_TOKEN_FOUND,
  REFRESH_TOKEN_ENDPOINT,
} from "~/auth/constants/auth.constant";
import {
  handleSessionExpired,
  refreshToken,
} from "~/auth/services/auth.service";
import { jwtStorage } from "~/auth/services/jwt-storage.service";
import { AuthClientState } from "~/auth/types/auth.type";
import { createBaseClient } from "~shared/utils/api-client.util";

// --------- REQUESTS INTERCEPTORS ---------
async function ensureRefreshTokenCompleted(
  _config: InternalAxiosRequestConfig,
  state: AuthClientState,
) {
  const accessToken = jwtStorage.get();
  if (!accessToken) {
    state.refreshToken ??= refreshToken();
  }
  await state.refreshToken;
  state.refreshToken = null;
}

async function attachAccessToken(
  config: InternalAxiosRequestConfig,
  _state: AuthClientState,
) {
  const accessToken = jwtStorage.get();

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
  state: AuthClientState,
) {
  const originalRequest: InternalAxiosRequestConfig & { _hasRetry?: boolean } =
    error.config!;

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
function createAuthClient() {
  const client = createBaseClient();
  const state: AuthClientState = { refreshToken: null };

  client.interceptors.request.use(
    async (config) => {
      await ensureRefreshTokenCompleted(config, state);
      await attachAccessToken(config, state).catch((error) =>
        Promise.reject(error),
      );

      return config;
    },
    (error) => Promise.reject(error),
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
    },
  );

  return client;
}

export const authClient = createAuthClient();

function createPublicClient() {
  const client = createBaseClient();
  const state: AuthClientState = { refreshToken: null };

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
    },
  );

  return client;
}

export const publicClient = createPublicClient();
