import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: 'expo',
  restrictedSyntax: ['jsx', 'tsx'],
  strict: true,
  tailwindCSS: false,
  unocss: true,
  ignores: ['**/*.d.ts'],
}, {
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': 'off',
    '@eslint-react/jsx-no-undef': 'off',
  }
})
