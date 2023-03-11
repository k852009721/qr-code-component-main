/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#d6e2f0',
        'grayish-blue': '#7b879d',
        'dark-blue': '#1f3251',
      },
      fontFamily: {
        'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
