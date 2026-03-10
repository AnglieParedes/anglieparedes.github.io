import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Cambiar a '/nombre-repo/' si usas repo específico en GitHub Pages
})
