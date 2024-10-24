import { create } from "zustand";

import { User } from "@/auth/types/auth.type";
import { Maybe } from "@shared/types/base.type";

export type AuthStoreState = {
  user?: Maybe<User>;
};

export type AuthStoreAction = {
  setUser: (user: User) => void;
  clear: () => void;
};

export type AuthStore = AuthStoreState & AuthStoreAction;

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clear: () => set({ user: null }),
}));
