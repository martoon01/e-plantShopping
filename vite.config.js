import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({  
  base: "/e-plantShopping",
  plugins: [react()],
})
