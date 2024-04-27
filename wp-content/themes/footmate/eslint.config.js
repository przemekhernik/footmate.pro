import globals from "globals";
import standard from "@eslint/js";


export default [
  standard.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser
    }
  },
];
