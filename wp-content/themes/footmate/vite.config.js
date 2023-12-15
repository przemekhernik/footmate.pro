import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
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
    rollupOptions: {
      input: [
        'resources/scripts/scripts.js',
        'resources/styles/styles.scss',
        'resources/scripts/blocks.js',
      ],
      output: {
        entryFileNames: 'scripts/[hash].js',
        chunkFileNames: 'vendor/[hash].js',
        assetFileNames: function(info) {
          switch (path.extname(info.name)) {
            case '.woff':
            case '.woff2':
              return 'fonts/[hash].[ext]';

            case '.js':
              return 'scripts/[hash].[ext]';

            case '.css':
            case '.scss':
              return 'styles/[hash].[ext]';

            case '.gif':
            case '.png':
            case '.jpg':
            case '.jpeg':
            case '.svg':
            case '.webp':
              return 'images/[name].[ext]';
          
            default:
              return 'others/[hash].[ext]';
          }
        },
      },
      plugins: [
        copy({
          targets: [
            { src: `resources/images/**/*`, dest: `dist/images`, rename: function(name, ext, fullPath) {
              const nname = `${name}-[hash].${ext}`;
              const nnname = crypto.randomBytes(4).toString('hex') + `.${ext}`;

              try {
                const mpath = `${ROOT}${BASE}/dist/manifest.json`;
                const manifestContent = fs.readFileSync(mpath, 'utf-8');
                const manifest = JSON.parse(manifestContent);

                manifest[fullPath] = {
                  file: nnname,
                  isEntry: false,
                  src: fullPath,
                };

                fs.writeFileSync(mpath, JSON.stringify(manifest, null, 2));
              } catch (error) {
                console.error('Error updating manifest file:', error);
              }
              

              return nnname;
            } },
          ],
          hook: 'writeBundle'
        }),
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