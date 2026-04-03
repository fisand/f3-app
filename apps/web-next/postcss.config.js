import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  plugins: [
    [
      '@unocss/postcss',
      {
        content: ['./app/**/*.{html,js,ts,jsx,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
        configFile: path.resolve(__dirname, '../../uno.config.ts'),
        cwd: path.resolve(__dirname, '../../'),
      },
    ],
  ],
}
