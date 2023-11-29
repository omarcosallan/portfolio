import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  padding: '0.375rem 1rem',
  alignItems: 'center',
  gap: '0.5rem',

  borderRadius: '$radius',
  backgroundColor: '$violet',
  color: '$white',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: '1.5rem',
  letterSpacing: '0.025rem',
  cursor: 'pointer',

  border: 'none',

  '&:hover': {
    boxShadow: '-1px 0px 30px 0px rgba(97, 71, 255, 0.80)',
    transition: 'all .10s',
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

        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
    border: {
      withBorder: {
        border: '1px solid $textSecondary',
      },
    },
  },
})
