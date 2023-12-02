import { styled } from '@/styles'

export const IconWrapperContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3rem',
  height: '3rem',
  borderRadius: '$sm',

  marginBottom: '1.5rem',

  backgroundColor: '$slate700',
  boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',

  svg: {
    color: '$slate50',
  },
})
