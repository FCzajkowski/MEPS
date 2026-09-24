import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [preact()],
  publicDir: false,
  build: {
    // Miejsce, gdzie Vite ma zapisywać skompilowany kod JS dla Expressa:
    outDir: path.resolve(__dirname, 'public/scripts'),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'public/scripts/home.jsx'),
      name: 'Home',
      fileName: () => 'home.js',
      formats: ['es']
    }
  }
});