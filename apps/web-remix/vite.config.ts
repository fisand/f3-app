import { resolve } from 'node:path'

import { reactRouter } from '@react-router/dev/vite'
import unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    unocss(),
    reactRouter(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        'fisand-icons': FileSystemIconLoader(`${resolve(import.meta.dirname, 'app/assets/icons')}/`, svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    }),
    AutoImport({
      imports: ['react'],
      dts: './app/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
        }),
      ],
      dirs: ['./app/components/ui'],
    }),
  ],
  build: {
    rollupOptions: {
      onLog(level, log, handler) {
        // ignore /*#__PURE__*/
        if (log.message.includes('/*#__PURE__*/')) {
          return
        }

        // ignore rollup warning about 'use client'
        if (log.message.includes('Module level directives cause errors when bundled'))
          return

        // ignore sourcemap warning about 'Can't resolve original location of error.'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (log.cause && (log.cause as any).message === `Can't resolve original location of error.`) {
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
