import { styled } from '@/styles'

export const CardContainer = styled('div', {
  position: 'relative',
  padding: '2rem',
  color: '$text',
  borderRadius: '$sm',

  fontSize: '0.875rem',
  fontWeight: '500',
  lineHeight: '160%',

  cursor: 'pointer',

  'h1, h2, h3': { color: '$white', marginBottom: '0.875rem' },

  '&::before': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    borderRadius: 'inherit',
    zIndex: '-1',

    background:
      'linear-gradient(45deg, rgba(255, 255, 255, 0), rgb(19 30 54) 50%)',
    boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',
    transition: 'all .50s ease',
    opacity: 0,
  },

  '&:hover::before': {
    opacity: 1,
  },

  variants: {
    filled: {
      true: {
        '&::before': {
          opacity: 1,
        },
      },
    },
  },
})
