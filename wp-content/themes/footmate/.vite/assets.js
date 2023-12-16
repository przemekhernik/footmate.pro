import fs from 'fs';
import crypto from 'crypto';
import copy from 'rollup-plugin-copy';

class Assets {
  constructor(params, config) {
    this.config = config;
    this.targets = params.targets || [];
    this.write = params.manifest || true;
  }

  parse() {
    if (! this.config.build.rollupOptions.plugins) {
      this.config.build.rollupOptions.plugins = [];
    }

    this.config.build.rollupOptions.plugins.push(
      copy({
        hook: 'writeBundle',
        targets: this.targets.map(target => {
          return {
            ...target,
            rename: (name, ext, source) => {
              const pattern = target.rename || '[name]-[hash].[ext]';
              const file = pattern
                .replace('[name]', name)
                .replace('[hash]', this.hash())
                .replace('[ext]', ext);
              
              if (this.write && this.config.build.manifest) {
                this.manifest(file, source);
              }

              return file;
            }
          };
        }),
      }),
    );
  }

  manifest(file, source) {
    const mname = typeof this.config.build.manifest === 'string' ? this.config.build.manifest : 'manifest.json';
    const mpath = `${this.config.build.outDir}/${mname}`;

    if (fs.existsSync(mpath)) {
      const manifest = JSON.parse(fs.readFileSync(mpath, 'utf-8'));

      if (! manifest[source]) {
        manifest[source] = {
          file: file,
          src: source,
        };

        fs.writeFileSync(mpath, JSON.stringify(manifest, null, 2));
      }
    }
  }

  hash() {
    return crypto.randomBytes(4).toString('hex');
  }
}

export default function(params) {
  return {
    name: 'statics',

    config(config) {
      const assets = new Assets(params, config);
      assets.parse();
    }
  }
}