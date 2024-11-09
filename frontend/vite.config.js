import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // or set a specific path if your app is deployed in a subdirectory
  build: {
    target: 'esnext',
    modulePreload: true,
  },
});
