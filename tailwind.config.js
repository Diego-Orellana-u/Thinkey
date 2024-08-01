/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "mobile-m": "375px",
      "mobile-l": "425px",
      "tablet-s": "550px",
      "tablet-l": "768px",
      "tablet-xl": "900px",
      "desktop-s": "1024px",
      "desktop-l": "1150px",
    },
    fontSize: {
      "h1-s": "2.188rem", //font-size: 35px, line-height: 42px
      "h2-s": "1.875rem", //font-size: 30px, line-height: 36px
      "h3-s": "1.5rem", //font-size: 24px, line-height: 28px
      "p-xs": "0.875rem", //font-size: 14px, line-height: 21px
      "p-s": "1rem", //font-size: 16px, line-height: 24px
      "p-l": "1.125rem", //font-size: 18px, line-height: 27px-28px
      "h1-xl": "4rem", //font-size: 64px, line-height: 75px
      "h2-xl": "3.5rem", //font-size: 56px, line-height: 67px
      "h3-xl": "2.5rem", //font-size: 40px, line-height: 48px
      "p-xl": "1.25rem", //font-size: 20px, line-height: 30px
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-generalSans)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F8F8FC",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
