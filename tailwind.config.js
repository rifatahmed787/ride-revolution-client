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
          DEFAULT: "#EF4100", //FF6600   Hierarchy: Consider assigning the blue color (#00AEEF) as the primary color and use it for important elements such as headings, key buttons, or call-to-action sections. Then, use the reddish-orange color (#EF4100) as an accent color to draw attention to specific details or create visual highlights.Contrast: Take advantage of the strong contrast between the blue and reddish-orange colors to create emphasis and visual interest. For example, you can use the reddish-orange color for interactive elements like hover effects or selected states to make them stand out.

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
