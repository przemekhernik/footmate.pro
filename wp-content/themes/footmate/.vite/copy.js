class Plugin {
  init() {
    console.log('set config');
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
      plugin.init();
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