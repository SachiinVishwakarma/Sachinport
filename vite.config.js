import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1', // force IPv4 (fixes ::1 error)
    port: 3000,        // change port from 5173
    strictPort: true
  }
})
