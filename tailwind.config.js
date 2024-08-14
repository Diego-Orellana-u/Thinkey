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
        "white-body-color": "#F2F2F2",
        "main-heading-color": "#002a54e8",
        "black-heading-color": "#222222",
        "buttons-bg": "#002a54e8",
        "buttons-text": "#9FCF00",
        "secondary-buttons-bg": "#9FCF00",
        "secondary-100": "#9FCF00",
        "accent-800": "#D63C3D",
        "accent-900": "#D32828",
        "gray-100": "#71717a",
        "gray-200": "#F1F1F1",
        "gray-300": "#777777",
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
