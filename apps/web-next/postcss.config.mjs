import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const uiPath = path.resolve(__dirname, '../../packages/ui/src')

export default {
  plugins: {
    '@unocss/postcss': {
      content: [
        './app/**/*.{html,js,ts,jsx,tsx}',
        path.join(uiPath, '**/*.{html,js,ts,jsx,tsx}'),
        '@repo/ui/src/**/*.{html,js,ts,jsx,tsx}',
        './node_modules/@repo/ui/src/**/*.{html,js,ts,jsx,tsx}',
      ],
      include: [uiPath, './node_modules/@repo/ui/src/**/*.{html,js,ts,jsx,tsx}'],
      configFile: path.resolve(__dirname, '../../uno.config.ts'),
    },
  },
}
