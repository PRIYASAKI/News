import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use absolute path to avoid issues
  build: {
    target: 'esnext',
    modulePreload: true,
    assetsDir: 'assets', // Relative assets directory
  },
});
