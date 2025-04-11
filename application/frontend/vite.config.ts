import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: Number(process.env.PORT),
  },
  resolve: {
    alias: [
      {
        find: '#/shared',
        replacement: path.resolve(__dirname, '../shared/src'),
      },
      {
        find: '#',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
});
