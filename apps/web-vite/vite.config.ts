import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import Checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'
import type { PluginOption } from 'vite-plus'
import { defineConfig } from 'vite-plus'

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
        'fisand-icons': FileSystemIconLoader(
          `${resolve(import.meta.dirname, 'src/assets/icons')}/`,
          (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    }) as PluginOption,
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
      exclude: ['**/[A-Z]*.tsx'],
      importMode: 'sync',
    }),
    UnoCSS({
      configFile: resolve(import.meta.dirname, '../../uno.config.ts'),
    }) as PluginOption,
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/trpc',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
    },
  },
})
