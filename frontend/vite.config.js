import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set to '/' for root or adjust based on your hosting setup
  build: {
    target: 'esnext',
    modulePreload: true,
  },
});
