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
      white: '#FFF',

      background: '#0F172A',
      colorTitle: '#E2E8F0',
      text: '#94A3B8',
      textSecondary: '#9E8CFC',

      violet: '#6147FF',
      violetSecondary: '#2C2250',
    },
    fontSizes: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      '4xl': '3rem',
    },
    radii: {
      radius: '6px',
    },
  },
})
