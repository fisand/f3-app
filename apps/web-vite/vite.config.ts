import { resolve } from 'node:path'

import EslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(import.meta.dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Checker({ typescript: true }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        'fisand-icons': FileSystemIconLoader(`${resolve(import.meta.dirname, 'src/assets/icons')}/`, svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    }),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
      exclude: ['**/[A-Z]*.tsx'],
      importMode: 'sync',
    }),
    UnoCSS({
      configFile: '../../uno.config.ts',
    }),
    // todo monorepo
    AutoImport({
      imports: ['react'],
      dts: './src/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
        }),
        {
          type: 'component',
          resolve: (name: string) => {
            if (name.startsWith('Shadcn')) {
              const partialName = name.slice(6)
              return {
                name: partialName,
                from: `@repo/ui/src/components/ui/${partialName.toLowerCase()}`,
              }
            }
          },
        },
      ],
    }),
    EslintPlugin(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8978/trpc',
        rewrite: path => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
    },
  },
})
