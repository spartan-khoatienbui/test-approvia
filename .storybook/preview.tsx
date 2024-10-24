/* eslint-disable no-restricted-imports */
import type { Preview } from "@storybook/react";

import { themes } from "@storybook/theming";
import { QueryClientProvider } from "@tanstack/react-query";
import { App, ConfigProvider } from "antd";
import React from "react";

import "../src/styles/global.css";

import { antConfig, PREFIX_CLASS } from "../src/configs/ant.config";
import { tanstackClient } from "../src/configs/tanstack-query.config";

export default {
  parameters: {
    docs: {
      theme: themes.light,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={tanstackClient}>
        <ConfigProvider theme={antConfig} prefixCls={PREFIX_CLASS}>
          <App>
            <Story />
          </App>
        </ConfigProvider>
      </QueryClientProvider>
    ),
  ],
} satisfies Preview;
