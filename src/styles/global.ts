import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$slate900',
    color: '$slate50',
    '-webkit-font-smoothing': 'antialiased',
    minHeight: '100vh',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background:
        'radial-gradient(1500px at 35% 150px, $violet600, rgba(255, 255, 255, 0) 25%), radial-gradient(1500px at 85% 15%, $violet600, rgba(255, 255, 255, 0) 25%)',
      pointerEvents: 'none',
      opacity: '.2',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
  },

  'h1, h2, h3': { color: '$slate50', marginBottom: '0.875rem' },

  button: {
    cursor: 'pointer',
  },
})
