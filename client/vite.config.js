import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define:{
    "porcess.env.VITE_REACT_API_URI":JSON.stringify(process.env.VITE_REACT_API_URI)
  }
})
