import { defineConfig, presetIcons, presetWind4, transformerVariantGroup } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  preflights: [
    {
      getCSS: () => `
      :root {
        --speed: 2s;
        --color-1: 0 100% 63%;
        --color-2: 270 100% 63%;
        --color-3: 210 100% 63%;
        --color-4: 195 100% 63%;
        --color-5: 90 100% 63%;
      }
      
      @keyframes rainbow {
        0% { background-position: 0%; }
        100% { background-position: 200%; }
      }

      @keyframes spin-around {
        0% {
          transform: translateZ(0) rotate(0);
        }
        15%, 35% {
          transform: translateZ(0) rotate(90deg);
        }
        65%, 85% {
          transform: translateZ(0) rotate(270deg);
        }
        100% {
          transform: translateZ(0) rotate(360deg);
        }
      }

      @keyframes shimmer-slide {
        to {
          transform: translate(calc(100cqw - 100%), 0);
        }
      }
      `,
    },
  ],
  presets: [
    presetWind4(),
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
  rules: [
    ['animate-rainbow', {
      animation: 'rainbow var(--speed, 2s) infinite linear',
    }],
    ['animate-shimmer-slide', {
      animation: 'shimmer-slide var(--speed) ease-in-out infinite alternate',
    }],
    ['animate-spin-around', {
      animation: 'spin-around calc(var(--speed) * 2) infinite linear',
    }],
  ],
  theme: {
    colors: {
      'color-1': 'hsl(var(--color-1))',
      'color-2': 'hsl(var(--color-2))',
      'color-3': 'hsl(var(--color-3))',
      'color-4': 'hsl(var(--color-4))',
      'color-5': 'hsl(var(--color-5))',
    },
  },
  transformers: [transformerVariantGroup()],
})
