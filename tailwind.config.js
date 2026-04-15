/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tems-cream': '#F3F0E9',
        'tems-green': '#494F3D',
        'tems-brown': '#352920',
        'tems-orange': '#B96C51',
      },
      fontFamily: {
        'tems-italic': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}