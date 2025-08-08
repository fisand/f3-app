import { defineConfig } from 'eslint-config-hyoban'

// todo custom
export default defineConfig({
  react: false,
  strict: true,
  tailwindCSS: false,
  unocss: false,
  ignores: ['**/*.d.ts', '**/zod/**/*.ts'],
  ignoreFiles: ['**/*.d.ts', 'src/zod/**/*.ts'],
})
