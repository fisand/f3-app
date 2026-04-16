import { resolve } from 'node:path'

// import { nitroV2Plugin as nitro } from '@tanstack/nitro-v2-vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import rsc from '@vitejs/plugin-rsc'
import { nitro } from 'nitro/vite'
import UnoCSS from 'unocss/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import checker from 'vite-plugin-checker'
import type { PluginOption } from 'vite-plus'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      rsc: {
        enabled: true,
      },
    }),
    rsc(),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    nitro({
      builder: 'rolldown',
      noExternals: false,
    }),
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
    UnoCSS({
      configFile: resolve(import.meta.dirname, '../../uno.config.ts'),
    }) as PluginOption,
  ],
  build: {
    outDir: '.output/public',
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'main',
              test: /node_modules[\\/](react|@tanstack[\\/]react-router|@tanstack[\\/]react-query|@tanstack[\\/]react-start|@orpc[\\/]tanstack-query)/,
            },
            {
              name: 'vendor',
              test: /node_modules[\\/](framer-motion|@repo[\\/]ui|@bprogress[\\/]react)/,
            },
          ],
        },
      },
    },
  },
})
