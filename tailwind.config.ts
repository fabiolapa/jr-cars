import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070707",
          900: "#0c0c0c",
          800: "#141414",
          700: "#1c1c1c",
          600: "#262626",
          500: "#3a3a3a",
          400: "#737373",
          300: "#a3a3a3",
          200: "#d4d4d4",
          100: "#f5f5f5",
        },
        brand: {
          DEFAULT: "#e10600",
          dark: "#b00500",
          light: "#ff2b1f",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Bebas Neue'", "Impact", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(225,6,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
