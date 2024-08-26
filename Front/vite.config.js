import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
/*   server: {
    open: true,
    port: 3000,
    https: false, // Asegúrate de que esta configuración no esté causando problemas
  },
  build: {
    sourcemap: true, // Esto puede ayudar a depurar errores en la consola
  }, */
})
