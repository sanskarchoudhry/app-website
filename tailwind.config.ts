import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bg-primary": "#07090e",
      "bg-secondary": "#021526",
      "pink-primary": "#EB3678",
      "light-blue-primary": "#41B3A2",
      "black-primary": "#322C2B",
      "yellow-primary": "#F9E400",
      "purple-primary": "#AF47D2",
      "button-primary-blue": "#5C2FC2",
      "button-secondary-blue": "#240750",
      "grey-primary": "#3C3D37",
      "grey-secondary": "#697565",
      "white-primary": "#ededed",
      "white-secondary": "#E9EFEC",
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
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".truncate-multiline": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "3", // Change this number for 2 or 3 lines
          WebkitBoxOrient: "vertical",
        },
      });
    },
  ],
};
export default config;
