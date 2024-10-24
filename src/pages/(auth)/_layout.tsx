import { Outlet } from "react-router-dom";

import { useAuthStore } from "@/auth/stores/auth.store";
import { Navigate } from "@router";
import { Header } from "@shared/components/Header";

export default function AuthLayout() {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />

      <main>
        <Outlet />

        <div className="h-[3000px]" />
      </main>
    </>
  );
}
