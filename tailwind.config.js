/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8600F0',
        'secondary': '#FFD600',
        'background': '#131313'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      }
    },


  },
  plugins: [],
}