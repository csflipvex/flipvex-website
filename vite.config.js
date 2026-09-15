import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/flipvex-website/',
  server: {
    allowedHosts: true, // Permits Cloudflare tunnel subdomains without breaking on restarts
  },
});