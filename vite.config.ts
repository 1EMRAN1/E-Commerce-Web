import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from /E-Commerce-Web/.
  // Local development and other hosts continue to use the root path.
  base: process.env.GITHUB_ACTIONS ? '/E-Commerce-Web/' : '/',
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
