import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //changes i made
  build: {
    rollupOptions: {
      input: {
        main: './src/App.jsx' // Modified this path to match your project structure
      }
    }
  }

})


