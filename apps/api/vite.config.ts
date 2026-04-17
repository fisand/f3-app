import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    entry: './src/index.ts',
    outDir: './dist',
    format: ['cjs'],
    dts: true,
    unbundle: true,
    target: 'node12',
    sourcemap: false,
    skipNodeModulesBundle: true,
    outExtensions(context) {
      if (context.format === 'cjs') {
        return {
          js: '.cjs',
        }
      }
    },
  },
})
