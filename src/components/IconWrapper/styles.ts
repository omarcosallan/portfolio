import { styled } from '@/styles'

export const IconWrapperContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3rem',
  height: '3rem',
  borderRadius: '$sm',

  marginBottom: '1.5rem',

  backgroundColor: '$slate800',
  background:
    'linear-gradient(to bottom, rgba(148,163,184,.1), rgba(50,50,56,.01))',
  boxShadow: 'inset 0 1px 0 0 #ffffff0d',

  svg: {
    color: '$slate50',
  },
})
