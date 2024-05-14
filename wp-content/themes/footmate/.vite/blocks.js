import fs from 'fs';

class Plugin {
  constructor(params) {
    this.path = params.path;
    this.blocks = fs.readdirSync(params.path);
  }

  assets() {
    const assets = [];

    for (const block of this.blocks) {
      if (fs.existsSync(`${this.path}/${block}/script.js`)) {
        assets.push(`${this.path}/${block}/script.js`);
      }

      if (fs.existsSync(`${this.path}/${block}/style.scss`)) {
        assets.push(`${this.path}/${block}/style.scss`);
      }
    }

    return assets;
  }
}

export default function (params) {
  const plugin = new Plugin(params);

  return {
    name: 'vite:blocks',

    config(config) {
      plugin.assets().forEach((input) => {
        config.build.rollupOptions.input.push(input);
      });
    },
  };
}
