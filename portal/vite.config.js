import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  base: '/NHI/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        form: path.resolve(__dirname, 'form.html'),
      },
    },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  
})
