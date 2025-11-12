import { resolve } from 'node:path'

// import { nitroV2Plugin as nitro } from '@tanstack/nitro-v2-vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import UnoCSS from 'unocss/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart(),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    nitro({
      noExternals: true,
    }),
    tsConfigPaths(),
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
    }) as PluginOption,
    UnoCSS({
      configFile: '../../uno.config.ts',
    }) as PluginOption,
  ],
  build: {
    outDir: '.output/public',
    rollupOptions: {
      external: ['@libsql/client', 'drizzle-orm', 'dotenv'],
    },
  },
})
