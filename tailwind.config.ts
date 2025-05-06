
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        neon: "#F97316",
        dark: "#121212",
        light: "#f3f3f3",
        "gray-dark": "#222",
        "gray-medium": "#555",
        "gray-light": "#888",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glitch: {
          "0%": {
            transform: "translate(0)",
            textShadow: "0.5px 0 0 rgba(244, 67, 54, 0.75), -0.5px 0 0 rgba(33, 150, 243, 0.75)"
          },
          "20%": {
            transform: "translate(-2px, 2px)",
            textShadow: "1px 0 0 rgba(244, 67, 54, 0.75), -1px 0 0 rgba(33, 150, 243, 0.75)"
          },
          "40%": {
            transform: "translate(-2px, -2px)",
            textShadow: "1px 0 0 rgba(244, 67, 54, 0.75), -1px 0 0 rgba(33, 150, 243, 0.75)"
          },
          "60%": {
            transform: "translate(2px, 2px)",
            textShadow: "1px 0 0 rgba(244, 67, 54, 0.75), -1px 0 0 rgba(33, 150, 243, 0.75)"
          },
          "80%": {
            transform: "translate(2px, -2px)",
            textShadow: "0.5px 0 0 rgba(244, 67, 54, 0.75), -0.5px 0 0 rgba(33, 150, 243, 0.75)"
          },
          "100%": {
            transform: "translate(0)",
            textShadow: "0.5px 0 0 rgba(244, 67, 54, 0.75), -0.5px 0 0 rgba(33, 150, 243, 0.75)"
          }
        },
        loading: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glitch": "glitch 2s infinite",
        "loading": "loading 1.5s ease-in-out infinite"
      },
      fontFamily: {
        "code": ["'Space Mono'", "monospace"],
        "pixel": ["'VT323'", "monospace"]
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
