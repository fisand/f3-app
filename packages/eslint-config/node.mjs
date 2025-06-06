import { defineConfig } from 'eslint-config-hyoban'

// todo custom
export default defineConfig({
  react: 'next',
  strict: true,
  tailwindCSS: false,
  unocss: true,
  ignores: ['**/*.d.ts', '**/zod/**/*.ts'],
  ignoreFiles: ['**/*.d.ts', 'src/zod/**/*.ts'],
})
