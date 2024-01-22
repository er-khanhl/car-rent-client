import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        secondary: "#54A6FF",
        background: "#F6F7F9",
        borderColor: "#C3D4E966",
      },
    },
  },
  plugins: [],
};
export default config;
