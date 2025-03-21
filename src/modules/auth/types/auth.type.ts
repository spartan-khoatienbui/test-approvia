import { UserResponse } from "~/__generated__/api/types/swagger";
import { AUTH_PROVIDER, USER_ROLE } from "~/auth/constants/auth.constant";
import { Maybe } from "~shared/types/base.type";

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type RefreshTokenResponse = {
  roles: Array<string>;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type AuthClientState = {
  refreshToken: Promise<RefreshTokenResponse | null> | null;
};

export type AuthProvider = (typeof AUTH_PROVIDER)[keyof typeof AUTH_PROVIDER];
export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export type AuthStore = {
  user: Maybe<UserResponse>;
  isLoaded: boolean;
};
