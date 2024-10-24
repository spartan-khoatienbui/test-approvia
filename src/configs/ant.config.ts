import { ThemeConfig } from "antd";

import { theme } from "./tailwind-theme.config";

export const PREFIX_CLASS = "w";

export const antConfig: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: theme.colors.palette[1],
  },
};
