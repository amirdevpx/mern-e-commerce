/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1140px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      montserrat: ["Montserrat", "san-serif"],
    },
    colors: {
      light: "var(--light)",
      // => var(--light)
      
      dark: "var(--dark)",
      // => var(--dark)

      "primary-normal": "var(--primary-normal)",
      "primary-light": "var(--primary-light)",
      "primary-darker": "var(--primary-darker)",
      // => var(--primary-...)

      "danger-normal": "var(--danger-normal)",
      "danger-light": "var(--danger-light)",
      "danger-darker": "var(--danger-darker)",
      // => var(--danger-...)

      "warning-normal": "var(--warning-normal)",
      "warning-light": "var(--warning-light)",
      "warning-darker": "var(--warning-darker)",
      // => var(--warning-...)

      "success-normal": "var(--success-normal)",
      "success-light": "var(--success-light)",
      "success-darker": "var(--success-darker)",
      // => var(--seccess-...)

      "muted-normal": "var(--muted-normal)",
      "muted-light": "var(--muted-light)",
      "muted-lighter": "var(--muted-lighter)",
      "muted-darker": "var(--muted-darker)",
      // => var(--muted-...)
    },
  },
  plugins: [],
};
