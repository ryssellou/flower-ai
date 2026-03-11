import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0A1F",
        primary: {
          DEFAULT: "#EC4899",
          light: "#F472B6",
          dark: "#BE185D",
        },
        accent: {
          DEFAULT: "#A78BFA",
          light: "#C084FC",
          dark: "#7C3AED",
        },
        stealth: "#1A1429",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        "pill": "100px",
        "card": "32px",
      },
      animation: {
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "subtle-pulse": "subtle-pulse 4s ease-in-out infinite",
      },
      keyframes: {
        "subtle-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
