const colors = require("./src/styles/colors")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors,
    },
    screens: {
      sm: { "max": "575px" },
      md: { "max": "800px" },
      lg: "1024px",
      xl: "1226px",
      xxl: "1460px",
    }
  },
  plugins: [],
}
