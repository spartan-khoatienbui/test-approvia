import { Outlet } from "react-router-dom";

import { useAuthStore } from "@/auth/stores/auth.store";
import { Navigate } from "@router";

export default function PrivateLayout() {
  // const { data: me } = useGetMe();
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
