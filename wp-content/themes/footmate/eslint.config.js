import globals from 'globals';
import standard from 'eslint-config-standard';

export default [
  standard,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
