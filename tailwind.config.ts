import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-primary": "#2E073F",
      "bg-secondary": "#6439FF",
      "pink-primary": "#EB3678",
      "light-blue-primary": "#41B3A2",
    },
    fontFamily: {
      "satoshi-regular": "Satoshi-Regular",
      "satoshi-black": "Satoshi-Black",
      "satoshi-bold": "Satoshi-Bold",
      "satoshi-italic": "Satoshi-Italic",
      "satoshi-medium": "Satoshi-Medium",
      "satoshi-light": "Satoshi-Light",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
