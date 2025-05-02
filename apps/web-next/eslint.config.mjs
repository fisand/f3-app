import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: 'next',
  unocss: true,
  tailwindCSS: false,
  ignores: ['**/*.d.ts'],
}, {
  rules: {},
})
