import { resolve } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'
import type { PluginOption } from 'vite-plus'
import { defineConfig } from 'vite-plus'

// https://vitejs.dev/config/
export default defineConfig({
  experimental: {
    bundledDev: true,
  },
  resolve: {
    alias: {
      '@/': `${resolve(import.meta.dirname, 'src')}/`,
      '@ui-internal/': `${resolve(import.meta.dirname, '../../packages/ui/src')}/`,
    },
  },
  plugins: [
    tailwindcss() as PluginOption,
    react() as PluginOption,
    Checker({ typescript: true }) as PluginOption,
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
      exclude: ['**/[A-Z]*.tsx'],
      importMode: 'sync',
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
