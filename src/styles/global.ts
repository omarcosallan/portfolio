import { globalCss } from '.'

import bgGradient from '../assets/gradient.jpg'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$slate900',
    width: '100%',
    minHeight: '100vh',
    color: '$slate50',
    '-webkit-font-smoothing': 'antialiased',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      minHeight: '100vh',

      backgroundImage: `
        radial-gradient(
          circle at center,
          rgba(0, 0, 0, 0) 0%,
          $slate900 100%
        ),
        url(${bgGradient.src})
      `,
      backgroundSize: 'cover',
      borderBottom: '1px solid rgba(148, 163, 184, .1)',
      zIndex: -1,
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
    },
  },

  'body, input, textarea, button': {
    fontFamily: '$Inter',
    fontWeight: 400,
  },

  'h1, h2, h3': { color: '$slate50', marginBottom: '0.875rem' },

  button: {
    cursor: 'pointer',
  },
})
