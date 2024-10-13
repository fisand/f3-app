import { defineConfig, presetIcons, presetUno, presetWind, transformerVariantGroup } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetIcons(),
    presetAnimations(),
    presetShadcn({
      color: 'neutral',
      radius: 0.3,
    }),
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  theme: {},
  transformers: [transformerVariantGroup()],
})