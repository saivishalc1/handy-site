import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/; a deploy workflow can set BASE_PATH
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
