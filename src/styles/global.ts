import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    color: '$textColor',
    '-webkit-font-smoothing': 'antialiased',
    minHeight: '2000vh',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100vh',
      background:
        'radial-gradient(600px at top 1px, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
      pointerEvents: 'none',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
  },
})
