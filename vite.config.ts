import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploy is served from the domain root (jubureba.github.io/)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
