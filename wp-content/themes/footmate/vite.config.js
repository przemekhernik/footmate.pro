import path from 'path';
import { defineConfig } from 'vite';
import copy from './.vite/copy';

const ROOT = path.resolve('../../../');
const BASE = __dirname.replace(ROOT, '');

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `${BASE}/dist/` : BASE,
  build: {
    manifest: 'manifest.json',
    assetsDir: '.',
    outDir: `dist`,
    emptyOutDir: true,
    rollupOptions: {
      input: ['resources/scripts/scripts.js', 'resources/styles/styles.scss'],
      output: {
        entryFileNames: '[hash].js',
        assetFileNames: '[hash].[ext]',
        chunkFileNames: '[hash].js',
      },
    },
  },
  plugins: [
    copy({
      targets: [
        {
          src: `resources/images/**/*.{png,jpg,jpeg,svg,webp}`,
        },
      ],
    }),
    {
      name: 'php',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.php')) {
          server.ws.send({ type: 'full-reload' });
        }
      },
    },
  ],
});
