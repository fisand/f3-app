import path from 'node:path'

export default {
  plugins: {
    '@unocss/postcss': {
      content: ['./app/**/*.{html,js,ts,jsx,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
      configFile: '../../uno.config.ts',
      cwd: path.resolve(import.meta.dirname, '../../'),
    },
  },
}
