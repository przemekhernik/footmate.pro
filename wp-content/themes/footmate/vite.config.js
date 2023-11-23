import path from 'path';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import { babel } from '@rollup/plugin-babel';

const ROOT = path.resolve('../../../')
const BASE = __dirname.replace(ROOT, '');

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `${BASE}/dist/` : BASE,
  build: {
    manifest: true,
    assetsDir: '.',
    outDir: `dist`,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: [
        'resources/scripts/scripts.js',
        'resources/styles/styles.scss',
        'resources/scripts/blocks.js',
      ],
      output: {
        entryFileNames: '[hash].js',
        assetFileNames: '[hash].[ext]',
      },
      plugins: [
        babel({
          babelHelpers: 'bundled',
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['ie >= 11'],
                },
              },
            ],
          ],
        }),
      ],
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [
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