import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'react'],
  env: {
    browser: true,
  },
  ignorePatterns: ['dist'],
  rules: {
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'warn',
    'react/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
})
