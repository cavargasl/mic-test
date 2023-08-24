import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'src', replacement: '/src' }
    ]
  },
  build: {
    chunkSizeWarningLimit: 1600,
    minify: false,
  }
})