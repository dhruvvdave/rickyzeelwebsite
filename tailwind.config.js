/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      colors: {
        cream: 'var(--color-cream)',
        'warm-white': 'var(--color-warm-white)',
        sand: '#e8ddd0',
        beige: 'var(--color-beige)',
        taupe: 'var(--color-taupe)',
        brown: 'var(--color-brown)',
        dark: 'var(--color-dark)',
        charcoal: '#3d3228',
        accent: '#8b7355',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
      },
    },
  },
  plugins: [],
}
