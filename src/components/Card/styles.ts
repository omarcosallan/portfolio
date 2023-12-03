import { styled } from '@/styles'

export const CardContainer = styled('div', {
  position: 'relative',
  padding: '$12',
  color: '$slate400',
  borderRadius: '$sm',
  overflow: 'hidden',

  fontSize: '$sm',
  fontWeight: '500',
  lineHeight: '160%',

  cursor: 'pointer',

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

    background: '$slate800',
    boxShadow: 'inset 0 1px 0 0 #ffffff0d',
    opacity: 0,
  },

  '&:hover::before': {
    opacity: 1,
    transition: 'all .15s cubic-bezier(.4,0,.2,1)',
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
