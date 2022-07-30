/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'rich-black': '#030507',
      'eerie-black': '#0B1727',
      'jet-black': '#060C13',
      'rich-blue': '#07101D',
      'blue-jeans': '#5AC1ED',
      'chinese-green': '#C8ED5A',
      'space-cadet': '#1B304B',
      white: '#FFFFFF'
    },
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      ...defaultTheme.screens
    },
    extend: {}
  },
  plugins: []
}
