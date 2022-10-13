/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 48,
    },
    colors: {
      black: '#000',
      white: '#fff',
      purple: {
        100: '#E7D7F0',
        400: '#675C87',
        700: '#563373',
        800: '#381B50'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      }
    },
  },
  plugins: [],
}
