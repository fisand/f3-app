// import { nitroV2Plugin as nitro } from '@tanstack/nitro-v2-vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import rsc from '@vitejs/plugin-rsc'
import { nitro } from 'nitro/vite'
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
    tailwindcss() as PluginOption,
    tanstackStart({
      rsc: {
        enabled: true,
      },
    }) as PluginOption,
    rsc() as PluginOption,
    // react's vite plugin must come after start's vite plugin
    viteReact() as PluginOption,
    nitro({
      builder: 'rolldown',
      noExternals: false,
    }) as PluginOption,
    checker({
      typescript: true,
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
