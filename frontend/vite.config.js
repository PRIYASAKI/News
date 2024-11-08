import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Add this line to set a relative base path
  build: {
    target: 'esnext',
    modulePreload: true,
  },
});
