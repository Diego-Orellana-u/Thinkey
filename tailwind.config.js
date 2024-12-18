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
      "h2-s": "1.875rem", //font-size: 30px, line-height: 36px   LISTO
      "h3-s": "1.5rem", //font-size: 24px, line-height: 28px LISTO
      "p-s": "1rem", //font-size: 16px, line-height: 24px LISTO
      "h1-s": "2.188rem", //font-size: 35px, line-height: 42px
      "p-l": "1.125rem", //font-size: 18px, line-height: 30px
      "h2-l": "2.375rem", //font-size: 38px, line-height: 45px
      "h1-xl": "3.25rem", //font-size: 52px, line-height: 63px
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
        "white-bg": "#F8F8FC",
        "yellowish-white-bg": "#fdfdf9",
        "black-body-color": "#333333",
        "gray-body-color": "#4b5563",
        "white-body-color": "#F2F2F2",
        "main-heading-color": "#333B68",
        "black-heading-color": "#222222",
        "buttons-bg": "#322a89",
        "buttons-text": "#9FCF00",
        "main-100": "#333B68",
        "main-200": "#1A2357",
        "main-300": "#111827",
        "secondary-buttons-bg": "#9FCF00",
        "secondary-100": "#9FCF00",
        "btns-border": "#9d5b5d",
        "accent-800": "#D63C3D",
        "accent-900": "#D32828",
        "gray-100": "#71717a",
        "gray-200": "#F1F1F1",
        "gray-300": "#777777",
        "purple-100": "#85388D",
        "btns-test": "#F69837",
        "card-bg": "#9d5b5d",
        "white-border": "#E5E7EB",
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
