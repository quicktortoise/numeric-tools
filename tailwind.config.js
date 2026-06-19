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
        bg: '#f1f5f9',
        'bg-dark': '#0f172a',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        heading: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
