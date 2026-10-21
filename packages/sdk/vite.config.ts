import { defineConfig } from 'vite-plus'

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://viteplus.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  pack: {
    entry: './src/index.ts',
    outDir: './dist',
    format: ['es', 'cjs'],
    dts: true,
    unbundle: true,
    target: 'node12',
    sourcemap: false,
    outExtensions(context) {
      if (context.format === 'es') {
        return {
          js: '.mjs',
        }
      }

      return {
        js: '.cjs',
      }
    },
  },
})
