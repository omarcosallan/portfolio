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
      height: '100vh',
      // backgroundImage:
      //   'radial-gradient(circle at 15% 50%, rgb(44 34 80), rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 85% 30%, rgb(44 34 80), rgba(255, 255, 255, 0) 15%);',
      background:
        'radial-gradient(800px at top, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
      pointerEvents: 'none',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
  },
})
