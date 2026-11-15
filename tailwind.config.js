
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        mint: "#D4E4DF",
        darkmint: "#BACDC7",

        // Updated text colours
        green: "#889692",
        darkgreen: "#56605C",

        beige: "#F1F0F0",
        brown: "#545454",
      },

      fontFamily: {
        gilda: ["Gilda", "serif"],
        nunito: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
}
