import { styled } from '@/styles'

export const CardContainer = styled('div', {
  padding: '$12',
  color: '$slate400',
  borderRadius: '$sm',
  fontSize: '$sm',
  height: '100%',
  fontWeight: 500,
  lineHeight: '160%',
  cursor: 'pointer',

  background: '$slate800',

  '&:hover': {
    background: '$slate700',
    transition: 'all .15s cubic-bezier(.4,0,.2,1)',
  },

  variants: {
    type: {
      secondary: {
        position: 'relative',
        background: '$slate900',

        '&::before': {
          content: `''`,
          display: 'block',
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          width: 'calc(100% + 2px)',
          height: 'calc(100% + 2px)',
          borderRadius: 'inherit',
          zIndex: '-1',

          background:
            'linear-gradient(to bottom, rgba(148,163,184,.1), rgba(50,50,56,.01))',
        },

        '&:hover': {
          background: '$slate900',
        },
      },
    },
  },
})
