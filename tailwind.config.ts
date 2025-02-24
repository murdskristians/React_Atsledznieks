import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-ibm-plex-sans)",
        mono: "var(--font-ibm-plex-mono)",
      },
    },
  },
  plugins: [],
};
export default config;
