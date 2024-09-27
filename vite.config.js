import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Use '0.0.0.0' to allow access from external devices
    port: 5173   // Make sure the port matches
  }
})
