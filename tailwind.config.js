/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgwhite':'#F5F5F5',
        'filler': '#F05454',
        'textcolor': '#30475E',
        'black': '#121212',
      },
      fontFamily: {
        'mono': ['Azeret Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}