import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";

export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        palette: {
          1: "#010101",
          2: "#020202",
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
