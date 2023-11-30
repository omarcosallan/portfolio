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
  lineHeight: '1.5rem',
  letterSpacing: '0.025rem',
  cursor: 'pointer',

  border: '1px solid transparent',
  // boxShadow:
  //   '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',

  '&:hover': {
    boxShadow: '0px 0px 30px 0px #2C2250',

    border: '1px solid $violet',
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
          color: '$textSecondary',

          svg: {
            color: '$textSecondary',
          },
        },
      },
    },
    outlined: {
      violet: { border: '1px solid $violet' },
      secondary: { border: '1px solid $textSecondary' },
      white: { border: '1px solid $white' },
    },
  },
})
