import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        academic: {
          navy: "#0f172a",
          darkBlue: "#1e293b",
          royal: "#1e3a8a",
          indigo: "#312e81",
          gold: "#d97706",
          emerald: "#059669",
          slate: "#334155",
          sand: "#fbfbfa",
        },
        rainbow: {
          red: "#ef4444",
          orange: "#f97316",
          yellow: "#eab308",
          green: "#10b981",
          blue: "#0ea5e9",
          indigo: "#6366f1",
          violet: "#a855f7",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
        "card-hover": "0 20px 30px -10px rgba(15, 23, 42, 0.12), 0 8px 10px -4px rgba(15, 23, 42, 0.04)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        rainbow: "0 0 25px -5px rgba(99, 102, 241, 0.25)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
