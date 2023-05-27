/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode based on class name
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00AEEF",
          dark: "#0077B6", //dark mode color for the brand
        },
        primary: {
          DEFAULT: "#FF6600",
          dark: "#FF3D00", // dark mode color for the primary color
        },
        dark: "#000033",
      },
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
