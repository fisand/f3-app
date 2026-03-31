import { defineConfig } from 'eslint-config-hyoban'

// todo custom
export default defineConfig({
  react: false,
  strict: true,
  tailwindcss: false,
  unocss: false,
  ignores: ['**/*.d.ts', '**/zod/**/*.ts', '**/*.md', '**/*.json', '**/*.jsonc', '**/*.yaml', '**/*.yml', '**/*.toml'],
}, {
  rules: {
    'node/prefer-global/process': 'off',
  },
})
