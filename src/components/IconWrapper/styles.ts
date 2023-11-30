import { styled } from '@/styles'

export const IconWrapperContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  position: 'relative',
  borderRadius: '$sm',

  marginBottom: '1.5rem',

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    borderRadius: 'inherit',
    zIndex: -1,

    background: '$background',
    boxShadow:
      '0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',
  },

  svg: {
    color: '$textSecondary',
  },
})
