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
      cardBackground: 'rgba(15, 23, 42, 0.5)',

      colorTitle: '#E2E8F0',
      text: '#94A3B8',
      textSecondary: '#9E8CFC',

      violet: '#6147FF',
      violetSecondary: '#2c2250',
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      '2xl': '2.25rem',
      '4xl': '3rem',
    },
    radii: {
      sm: '6px',
    },
    fontWeights: { regular: '400', medium: '500', bold: '700' },
    space: {
      1: '0.25rem', // 4px
      2: '0.375rem', // 6px
      3: '0.5rem', // 8px
      4: '0.625rem', // 10px
      5: '0.75rem', // 12px
      6: '0.875rem', // 14px
      7: '1rem', // 16px
      8: '1.125rem', // 18px
      9: '1.25rem', // 20px
      10: '1.5rem', // 24px
      11: '1.75rem', // 28px
      12: '2rem', // 32px
      13: '2.25rem', // 36px
      14: '2.5rem', // 40px
      15: '2.75rem', // 44px
      16: '3rem', // 48px
    },
  },
})
