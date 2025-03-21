import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import twMerge from "./plugins/vite-tw-merge.plugin";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    react(),
    svgr(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    tailwindcss(),
    twMerge(),
  ],
  base: "/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.join(__dirname, "src/tests/setup.ts"),
    css: true,
  },
});
