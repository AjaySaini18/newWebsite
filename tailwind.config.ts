import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // ... your content paths
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1D4ED8",
        brandPink: "#EC4899",
      },
      fontFamily: {
        heading: ["Gilroy", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;