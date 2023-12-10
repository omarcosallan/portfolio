import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  padding: '$8 $12',
  alignItems: 'center',
  gap: '0.5rem',
  width: 'fit-content',
  height: '100%',
  borderRadius: '$sm',
  backgroundColor: '$violet600',
  color: '$slate50',
  fontSize: '$sm',
  fontWeight: 700,
  textTransform: 'uppercase',
  textDecoration: 'none',
  border: '1px solid transparent',

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  '&:hover': {
    backgroundColor: '$violet900',
  },

  svg: {
    color: '$slate50',
  },

  variants: {
    color: {
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $violet600',
        color: '$slate50',

        svg: {
          color: '$slate50',
        },

        '&:hover': {
          backgroundColor: '$violet600',
        },
      },
    },
  },
})
