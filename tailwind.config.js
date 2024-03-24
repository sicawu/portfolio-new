/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mint': '#D4E4DF',
      'darkmint': '#BACDC7',
      'green': '#56605C',

    },
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif']
      },
    }
  },
  plugins: [],
}