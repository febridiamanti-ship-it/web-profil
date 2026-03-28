import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Tambahkan blok server ini
  server: {
    allowedHosts: true, // Mengizinkan semua alamat URL dari LocalTunnel/Ngrok
  }
})