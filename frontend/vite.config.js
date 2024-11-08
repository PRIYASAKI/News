import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Set a relative base path
  build: {
    target: 'esnext',
    modulePreload: true,
    assetsDir: './assets', // Ensure assets are handled correctly in Netlify
  },
});
