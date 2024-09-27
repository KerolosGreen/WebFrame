import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://valoapi.hopto.org',
        changeOrigin: true,
        secure: false,  // It's HTTP, so we set secure to false
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});