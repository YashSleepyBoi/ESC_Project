import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "https://hotelapi.loyalty.dev/api/hotels",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
    },
    cors: false
    },
  },
  plugins: [react()],
})
