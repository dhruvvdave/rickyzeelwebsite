import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rickyzeelwebsite/',
  plugins: [react()],
  server: {
    port: 3000,
  },
})
