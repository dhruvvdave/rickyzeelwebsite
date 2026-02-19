/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Libre Caslon Display', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#F5F1E8',
        sand: '#EDE7DC',
        taupe: '#D4C4B0',
        charcoal: '#2C2C2C',
        accent: '#C4A57B',
      },
    },
  },
  plugins: [],
}
