import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: true,
  nextjs: true,
  unocss: true,
  tailwindcss: false,
  ignores: ['**/*.d.ts', '**/*.md', '**/*.json', '**/*.jsonc', '**/*.yaml', '**/*.yml', '**/*.toml'],
}, {
  rules: {},
})
