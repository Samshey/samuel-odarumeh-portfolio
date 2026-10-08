import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/samuel-odarumeh-portfolio/',
  plugins: [react()],
  build: {
    target: 'es2020'
  }
})
