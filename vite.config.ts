import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check',
  },
  fmt: {
    jsxSingleQuote: true,
    semi: false,
    singleQuote: true,
  },
  lint: {
    ignorePatterns: [
      '**/*.d.ts',
      '**/*.md',
      '**/*.json',
      '**/*.jsonc',
      '**/*.yaml',
      '**/*.yml',
      '**/*.toml',
      'apps/app-native/components/ui/**',
      'apps/web-remix/app/components/ui/**',
      'apps/web-tanstack/src/routeTree.gen.ts',
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
})
