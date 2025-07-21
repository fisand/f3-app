import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: 'vite',
  restrictedSyntax: ['jsx', 'tsx'],
  strict: true,
  unocss: true,
  tailwindCSS: false
}, {
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': 'off',
    'max-params': 'off',

    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignores: ['**/*.d.ts'],
})
