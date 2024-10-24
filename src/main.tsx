import { Routes } from "@generouted/react-router/lazy";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App, ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { antConfig, PREFIX_CLASS } from "@config/ant.config";
import { tanstackClient } from "@config/tanstack-query.config";

import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={tanstackClient}>
      <ConfigProvider theme={antConfig} prefixCls={PREFIX_CLASS}>
        <App>
          <Routes />
        </App>
      </ConfigProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
