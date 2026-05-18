import eslint from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser
    }
  }
);
