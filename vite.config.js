import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true
      }
    }
  },
  define: {
    'process.env': {
      REACT_APP_WS_URL: 'http://localhost:3001'
    }
  }
});