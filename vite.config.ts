import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a user-page repo (Harshit5555.github.io) GitHub Pages serves at the root,
// so base is '/'. If you fork this into a project repo, change base to '/repo-name/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
