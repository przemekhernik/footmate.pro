export default function() {
  return {
    name: 'vite:copy',

    config(config) {
      console.log('set config');
    },

    buildStart() {
      console.log('resolve targets');
    },

    writeBundle() {
      console.log('copy files');
    },

    closeBundle() {
      console.log('write manifest');
    },
  }
}