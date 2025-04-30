import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginReact from 'eslint-plugin-react';
import sortImports from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import next from 'eslint-config-next';

export default defineConfig([
  globalIgnores(['dist/**/*', 'node_modules/**/*']),
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  next.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    plugins: { sortImports },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'sortImports/exports': 'error',
      'sortImports/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^@/(.*)$'],
            ['^\\.|\\.\\.'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-undef': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': 'error',

      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-const-assign': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-alert': 'error',
      'no-await-in-loop': 'error',
    },
  },
]);
