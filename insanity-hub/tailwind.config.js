/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom purple and pink shades for gradients and specific elements
        purple: {
          DEFAULT: "hsl(270 90% 65%)", // Much more vibrant purple
          50: "hsl(270 90% 95%)",
          100: "hsl(270 90% 90%)",
          200: "hsl(270 90% 80%)",
          300: "hsl(270 90% 70%)",
          400: "hsl(270 90% 60%)",
          500: "hsl(270 90% 50%)",
          600: "hsl(270 90% 40%)",
          700: "hsl(270 90% 30%)",
          800: "hsl(270 90% 20%)",
          900: "hsl(270 90% 10%)",
        },
        pink: {
          DEFAULT: "hsl(320 90% 65%)", // Much more vibrant pink
          50: "hsl(320 90% 95%)",
          100: "hsl(320 90% 90%)",
          200: "hsl(320 90% 80%)",
          300: "hsl(320 90% 70%)",
          400: "hsl(320 90% 60%)",
          500: "hsl(320 90% 50%)",
          600: "hsl(320 90% 40%)",
          700: "hsl(320 90% 30%)",
          800: "hsl(320 90% 20%)",
          900: "hsl(320 90% 10%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        // Custom keyframes for purple/pink glow
        "insanity-glow": {
          "0%, 100%": {
            "background-position": "0% 50%",
            filter: "drop-shadow(0 0 20px hsl(270 90% 65% / 0.3))", // Vibrant Purple glow
          },
          "50%": {
            "background-position": "100% 50%",
            filter: "drop-shadow(0 0 40px hsl(270 90% 65% / 0.6))", // Stronger vibrant purple glow
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            "box-shadow": "0 0 20px hsl(270 90% 65% / 0.1)", // Vibrant Purple glow
          },
          "50%": {
            "box-shadow": "0 0 40px hsl(270 90% 65% / 0.2)", // Stronger vibrant purple glow
          },
        },
        "progress-glow": {
          "0%, 100%": {
            "box-shadow": "0 0 10px hsl(270 90% 65% / 0.3)", // Vibrant Purple progress glow
          },
          "50%": {
            "box-shadow": "0 0 20px hsl(270 90% 65% / 0.6)", // Stronger vibrant purple progress glow
          },
        },
        "border-pulse": {
          "0%, 100%": {
            "border-color": "hsl(270 90% 65% / 0.1)", // Vibrant Purple border
          },
          "50%": {
            "border-color": "hsl(270 90% 65% / 0.3)", // Stronger vibrant purple border
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "insanity-glow": "insanity-glow 3s ease-in-out infinite, insanity-pulse 2s ease-in-out infinite alternate",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "progress-glow": "progress-glow 2s ease-in-out infinite",
        "border-pulse": "border-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

