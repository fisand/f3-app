import fs from 'node:fs'
import path, { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(import.meta.dirname, 'src')}/`,
      '@ui-internal/': `${resolve(import.meta.dirname, '../../packages/ui/src')}/`,
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
    }) as PluginOption,
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
      exclude: ['**/[A-Z]*.tsx'],
      importMode: 'sync',
    }),
    UnoCSS({
      configFile: '../../uno.config.ts',
    }) as PluginOption,
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
            const uiComponentsPath = path.resolve(import.meta.dirname, '../../packages/ui/src/components/ui')
            const names = fs.readdirSync(uiComponentsPath).map(file => file.replace(/\.tsx$/, ''))
            const components = names.map((component) => {
              return component
                .split('-')
                .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                .join('')
            })

            for (const component of components) {
              if (name === component || name.startsWith(component)) {
                return {
                  name,
                  from: `@repo/ui/src/components/ui/${names[components.indexOf(component)].toLowerCase().toLowerCase()}`,
                }
              }
            }
          },
        },
      ],
    }) as PluginOption,
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/trpc',
        rewrite: path => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
    },
  },
})
