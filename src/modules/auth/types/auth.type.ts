import { AUTH_PROVIDER, USER_ROLE } from "@/auth/constants/auth.constant";

export type LoginResponse = {
  roles: Array<string>;
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

export type User = {
  id: string;
  fullName: string;
  avatar?: string;
};
