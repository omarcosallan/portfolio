import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    color: '$colorTitle',
    '-webkit-font-smoothing': 'antialiased',
    minHeight: '100vh',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background:
        'radial-gradient(1000px at top, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
      pointerEvents: 'none',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
  },
})
