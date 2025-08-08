import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/


export default defineConfig({
  base: './', // 👈 This line is IMPORTANT for Netlify deployment
  plugins: [react(), tailwindcss()],
})