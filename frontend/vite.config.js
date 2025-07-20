import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcssVite from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcssVite()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});