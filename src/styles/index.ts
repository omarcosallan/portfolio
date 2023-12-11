import { createStitches, defaultThemeMap } from '@stitches/react'

import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

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
  themeMap: {
    ...defaultThemeMap,
    lineHeight: 'space',
  },
  theme: {
    fonts: { Inter: `${inter.style.fontFamily}, sans-serif` },
    colors: {
      white: '#FFFFFF',

      gray800: 'rbg(32 32 36)',

      slate50: '#f8fafc',
      slate200: '#e2e8f0',
      slate300: '#cbd5e1',
      slate400: '#94a3b8',
      slate500: '#64748b',
      slate700: '#334155',
      slate800: '#1e293b',
      slate900: '#0f172a',
      slate950: '#020617',

      violet400: '#a78bfa',
      violet500: '#8b5cf6',
      violet600: '#7c3aed',
      violet900: '#4c1d95',

      sky400: '#38bdf8',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
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
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
  },
})
