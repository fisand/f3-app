import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: true,
  strict: true,
  tailwindcss: false,
  unocss: true,
  ignores: ['**/*.d.ts', '**/*.md', '**/*.json', '**/*.jsonc', '**/*.yaml', '**/*.yml', '**/*.toml'],
}, {
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': 'off',
    '@eslint-react/jsx-no-undef': 'off',
    'e18e/prefer-static-regex': 'off',
  }
})
