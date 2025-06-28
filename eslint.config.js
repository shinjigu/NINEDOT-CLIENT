import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config({
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: globals.browser,
  },
  plugins: {
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    import: eslintPluginImport,
    prettier: prettierPlugin,
    'jsx-a11y': jsxA11y,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignores: ['node_modules', 'dist', 'dist-ssr'],
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    prettierConfig,
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    curly: 'error',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'react/self-closing-comp': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/jsx-pascal-case': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': 'error',
  },
});
