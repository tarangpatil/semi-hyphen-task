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
      },
      colors: {
        "dark-bg": "#07100E",
        "text-cyan": "#6FFFE9",
        "text-gray": "#909090",
        "text-black": "#07100E",
        "box-corner-one": "#011210",
        "box-corner-two": "#061c1a",
        "border-blue": "#3A506B",
      },
    },
  },
  plugins: [],
};
export default config;
