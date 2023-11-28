import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: '#0F172A',
      textColor: '#E2E8F0',
    },
    fontSizes: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      '4xl': '3rem',
    },
  },
})
