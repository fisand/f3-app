import { defineConfig } from 'tsdown'

export default defineConfig({
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
})
