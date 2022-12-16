/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      '2sm': '510px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'rich-black': '#030507',
        'eerie-black': '#0B1727',
        'jet-black': '#060C13',
        'rich-blue': '#07101D',
        'blue-jeans': '#5AC1ED',
        'chinese-green': '#C8ED5A',
        'chinese-green-border': 'rgba(200, 237, 90, 0.2)',
        'space-cadet': '#1B304B',
        white: '#FFFFFF',
        'green-border-opacity': 'rgba(200, 237, 90, 0.2)'
      },
      fontFamily: {
        'mitr': ['Mitr', ' sans-serif'],
      },
    }
  },
  plugins: []
}
