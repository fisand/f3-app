import { resolve } from 'node:path'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  resolve: {
    alias: {
      '@ui-internal/': `${resolve(import.meta.dirname, '../../packages/ui/src')}/`,
    },
  },
  plugins: [
    unocss({
      configFile: '../../uno.config.ts',
    }) as PluginOption,
    Checker({ typescript: true }) as PluginOption,
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        'fisand-icons': FileSystemIconLoader(`${resolve(import.meta.dirname, 'src/assets/icons')}/`, svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    }) as PluginOption,
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    react(),
  ],
})

export default config
