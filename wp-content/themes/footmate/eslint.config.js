import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.extends('eslint-config-standard'),

  {
    rules: {
      'space-before-function-paren': ['error', 'never'],
      curly: ['error', 'all'],
      'comma-dangle': ['error', 'always-multiline'],
      'padding-line-between-statements': ['error', {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      }],
      semi: ['error', 'always'],
    },
  },

  {
    ignores: ['dist', 'vendor', 'node_modules', '.output'],
  },
];
