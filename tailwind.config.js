/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a1a',
        'tems-cream': '#F3F0E9',
        'tems-green': '#494F3D',
        'tems-brown': '#352920',
        'tems-orange': '#B96C51',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        playfair: ['"Bodoni Moda"', 'serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}