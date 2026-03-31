import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: true,
  strict: true,
  unocss: true,
  tailwindcss: false,
  ignores: ['**/*.d.ts', '**/components/ui/**', '**/*.md', '**/*.json', '**/*.jsonc', '**/*.yaml', '**/*.yml', '**/*.toml'],
}, {
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': 'off',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
    'max-params': 'off',
    'no-console': 'off',
    'e18e/prefer-static-regex': 'off',

    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignores: ['**/*.d.ts'],
})
