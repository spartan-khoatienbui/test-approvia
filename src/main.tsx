import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { App, ConfigProvider } from "antd";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { useAuth } from "~/auth/hooks/useAuth";
import { routeTree } from "~/routeTree.gen";
import { antConfig, PREFIX_CLASS } from "~config/ant.config";
import { tanstackClient } from "~config/tanstack-query.config";
import { Pending } from "~shared/components/loading/Pending";
import { useNotification } from "~shared/hooks/useNotification";

dayjs.extend(utc);

const router = createRouter({
  routeTree,
  context: {
    auth: null!,
    notification: null!,
  },
});

declare module "@tanstack/react-router" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={tanstackClient}>
      <ConfigProvider theme={antConfig} prefixCls={PREFIX_CLASS}>
        <App>
          <WebApp />
        </App>
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
);

export function WebApp() {
  const auth = useAuth();
  const notification = useNotification();

  return (
    <>
      <RouterProvider router={router} context={{ auth, notification }} defaultPendingComponent={Pending} />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
    </>
  );
}
