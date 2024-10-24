import { Outlet } from "react-router-dom";

import { Header } from "@shared/components/Header";

export default function PublicLayout() {
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
