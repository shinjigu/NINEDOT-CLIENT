import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';

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
    'eslint-config-prettier',
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
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'react/self-closing-comp': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
});
