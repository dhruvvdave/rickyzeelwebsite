/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Avenir Next', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#f9f5f0',
        'warm-white': '#fefcf9',
        sand: '#e8ddd0',
        beige: '#e8ddd0',
        taupe: '#c4b5a5',
        brown: '#8b7355',
        dark: '#2c2416',
        charcoal: '#3d3228',
        accent: '#8b7355',
        'text-light': '#7a6a58',
      },
    },
  },
  plugins: [],
}
