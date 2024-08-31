import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },animation: {
        "content-main": "hiddenImg 0.8s ease",
        "content-second": "hiddenImg 1.5s ease",
        "content-third": "hiddenImg 2s ease",
      },
      keyframes: {
        hiddenImg: {
          "0%": {transform: "translateX(-10px)", opacity: "0"},
          "100%": {transform: "translateX(0px)", opacity: "1"}
        },
      },
      fontFamily: {
        sans: ['var(--font-family-robot)']
      }
    },
  },
  plugins: [],
};
export default config;
