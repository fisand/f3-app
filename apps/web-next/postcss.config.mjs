export default {
  plugins: {
    '@unocss/postcss': {
      content: ['./app/**/*.{html,js,ts,jsx,tsx}'],
      configFile: '../../uno.config.ts',
    },
  },
}