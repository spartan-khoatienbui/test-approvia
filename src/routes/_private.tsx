import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Layout } from "antd";
import { useState } from "react";

import { Header } from "~shared/components/layout/Header";
import { Sidebar } from "~shared/components/layout/Sidebar";

const { Content } = Layout;

export const Route = createFileRoute("/_private")({
  component: PrivateLayout,
  beforeLoad: async ({ context }) => {
    if (!(await context.auth.isAuthenticated())) throw redirect({ to: "/sign-in" });
  },
});

function PrivateLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className="h-screen">
      <Sidebar collapsed={collapsed} onCollapseButtonClick={setCollapsed} />

      <Layout>
        <Header />
        <Content className="overflow-y-auto bg-white">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
