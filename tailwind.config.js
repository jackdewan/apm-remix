const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        white: "#FFF",
        cream: "#FFFDD0",
        mazak: "#FF6601",
        primary: {
          DEFAULT: "#0E1E25",
          50: "#408AAA",
          100: "#3B7E9B",
          200: "#30667E",
          300: "#244E60",
          400: "#193643",
          500: "#0E1E25",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        secondary: {
          DEFAULT: "#40ADD0",
          50: "#D3ECF4",
          100: "#C3E5F0",
          200: "#A2D7E8",
          300: "#81C9E0",
          400: "#61BBD8",
          500: "#40ADD0",
          600: "#2B8EAD",
          700: "#206980",
          800: "#144453",
          900: "#091F26",
          950: "#040D10",
        },
      },
      fontFamily: {
        comfort: ["comfort"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
