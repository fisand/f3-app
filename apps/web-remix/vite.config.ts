import { resolve } from 'node:path'

import { reactRouter } from '@react-router/dev/vite'
import unocss from 'unocss/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import checker from 'vite-plugin-checker'
import type { PluginOption } from 'vite-plus'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    unocss(),
    reactRouter(),
    checker({
      typescript: true,
    }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        'fisand-icons': FileSystemIconLoader(
          `${resolve(import.meta.dirname, 'app/assets/icons')}/`,
          (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    }) as PluginOption,
  ],
  build: {
    rollupOptions: {
      onLog(level, log, handler) {
        // ignore /*#__PURE__*/
        if (log.message.includes('/*#__PURE__*/')) {
          return
        }

        // ignore rollup warning about 'use client'
        if (log.message.includes('Module level directives cause errors when bundled')) return

        // ignore sourcemap warning about 'Can't resolve original location of error.'

        if (
          log.cause &&
          (log.cause as any).message === `Can't resolve original location of error.`
        ) {
          return
        }

        handler(level, log)
      },
    },
  },
  server: {
    port: 9300,
  },
})
