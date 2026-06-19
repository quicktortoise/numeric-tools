/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#367abd',
        'primary-dark': '#2a6099',
        secondary: '#ee9611',
        'secondary-dark': '#eb7b2d',
        fg: '#262626',
        'fg-contrast': '#eeeeee',
        bg: '#e6e6e6',
        'bg-dark': '#1a1a2e',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        heading: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
