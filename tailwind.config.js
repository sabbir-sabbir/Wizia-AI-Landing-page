const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#002228",
        btncolor: "#0FF1F6",
        ground: "#ffffff",
      },
      fontfamily: { 
         mont:['Montserrat', 'sans-serif'],
       },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
