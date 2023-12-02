import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  padding: '0.375rem 1rem',
  alignItems: 'center',
  gap: '0.5rem',

  borderRadius: '$sm',
  backgroundColor: '$indigo600',
  color: '$slate50',
  fontSize: '0.875rem',
  lineHeight: '1.5rem',

  border: '1px solid transparent',

  '&:hover': {
    backgroundColor: '$indigo500',
    transition: 'all .15s cubic-bezier(.4,0,.2,1)',
  },

  svg: {
    color: '$slate50',
    fontSize: '0.875rem',
  },

  variants: {
    color: {
      transparent: {
        backgroundColor: '$slate800',
        boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',
        color: '$indigo600',

        svg: {
          color: '$indigo600',
        },
      },
    },
  },
})
