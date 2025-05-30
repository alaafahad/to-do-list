/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      minHeight: {
        "1/2": "50%",
      },
      colors: {
        "custom-blue": "#1d484d",
        "custom-white": "#f6f5f3",
      },
    },
  },
  plugins: [],
};
