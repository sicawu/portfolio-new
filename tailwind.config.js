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
      'darkgreen': '#889692',
      'beige': '#f1f0f0',
      'brown': '#545454'
    },
    
    fontFamily: {
      gilda: ["Gilda", "sans-serif"]
    },
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif']
      },
    }
  },
  plugins: [],
}