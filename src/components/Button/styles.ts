import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  padding: '0.375rem 1rem',
  alignItems: 'center',
  gap: '0.5rem',

  borderRadius: '$sm',
  backgroundColor: '$violet',
  color: '$white',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: '1.5rem',
  letterSpacing: '0.025rem',
  cursor: 'pointer',

  border: 'none',

  '&:hover': {
    filter: 'brightness(1.2)',
    transition: 'all .20s ease',
  },

  svg: {
    color: '$white',
    fontSize: '0.875rem',
  },

  variants: {
    color: {
      secondary: {
        backgroundColor: '$violetSecondary',
        color: '$textSecondary',

        svg: {
          color: '$textSecondary',
        },
      },
      transparent: {
        backgroundColor: 'transparent',
        color: '$white',

        svg: {
          color: '$white',
        },

        '&:hover': {
          backgroundColor: '$background',
        },
      },
    },
    outlined: {
      violet: { border: '2px solid $violet' },
      secondary: { border: '2px solid $textSecondary' },
      white: { border: '2px solid $white' },
    },
  },
})
