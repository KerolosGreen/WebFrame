import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://valoapi.hopto.org',
        changeOrigin: true,
        secure: false,  // Since it's HTTP
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});