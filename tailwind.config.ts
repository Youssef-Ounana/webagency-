import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          50: "#F7F7F8",
          100: "#EDEDF0",
          200: "#D4D4D9",
          400: "#6B6B76",
          600: "#3A3A42",
          900: "#0A0A0B",
        },
        primary: {
          50: "#EFF4FF",
          100: "#DBE6FE",
          300: "#93B7FD",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E3A8A",
        },
        accent: {
          400: "#A78BFA",
          500: "#7C3AED",
          600: "#6D28D9",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,0.15) 0%, rgba(37,99,235,0.08) 45%, rgba(255,255,255,0) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
