import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-plantShopping/', // Set the base path to match your GitHub repo name
  plugins: [react()],
});
