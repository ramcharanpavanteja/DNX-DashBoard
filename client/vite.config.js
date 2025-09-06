import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change 'mern-dnx-dashboard' if you rename your repo
  base: '/mern-dnx-dashboard/'
})
