class Plugin {
  constructor() {
    this.targets = [];
    this.entries = [];

    this.dest = '';
    this.rename = '';
    this.manifest = '';
  }

  init(config) {
    this.dest = config.dest;
    this.rename = config.rename;

    if (config.manifest) {
      this.manifest = `${this.dest}/${config.manifest}`;
    }

    if (config.targets) {
      this.targets = config.targets
        .filter(item => item.src)
        .map(item => {
          return {
            src: item.src,
            rename: item.rename || this.rename,
            manifest: item.manifest !== false,
            files: [],
          };
        });
    }
  }

  resolve() {
    console.log('resolve targets');
  }

  copy() {
    console.log('copy files');
  }

  write() {
    console.log('write manifest');
  }
}

export default function(params) {
  const plugin = new Plugin();

  return {
    name: 'vite:copy',

    config(config) {
      const { build } = config;
      plugin.init({
        dest: build.outDir || 'dist',
        rename: build.rollupOptions.output.assetFileNames || '[name]-[hash].[ext]',
        targets: params.targets || [],
        manifest: typeof build.manifest === 'string'
          ? build.manifest
          : build.manifest === true
            ? '.vite/manifest.json'
            : '',
      });
    },

    buildStart() {
      plugin.resolve();
    },

    writeBundle() {
      plugin.copy();
    },

    closeBundle() {
      plugin.write();
    },
  }
}