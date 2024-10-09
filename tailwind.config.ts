import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-primary": "#021526",
      "bg-secondary": "#6439FF",
      "pink-primary": "#EB3678",
      "light-blue-primary": "#41B3A2",
      "black-primary": "#000000",
      "yellow-primary": "#F9E400",
      "purple-primary": "#AF47D2",
      "button-primary-blue": "#5C2FC2",
      "button-secondary-blue": "#240750",
      "grey-primary": "#3C3D37",
      "gewy-secondary": "#697565",
    },
    fontSize: {
      12: "0.75rem",
      14: "14px",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "4.5rem",
    },
    gap: ({ theme }) => ({
      4: "0.25rem",
      8: "0.5rem",
      ...theme("fontSize"),
    }),
    lineHeight: ({ theme }) => ({
      ...theme("fontSize"),
    }),
    fontFamily: {
      "satoshi-regular": "Satoshi-Regular",
      "satoshi-black": "Satoshi-Black",
      "satoshi-bold": "Satoshi-Bold",
      "satoshi-italic": "Satoshi-Italic",
      "satoshi-medium": "Satoshi-Medium",
      "satoshi-light": "Satoshi-Light",
      "archivoBlack-regular": "ArchivoBlack-Regular",
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
