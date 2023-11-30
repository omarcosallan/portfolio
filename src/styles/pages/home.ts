import { styled } from '..'

export const HomeContainer = styled('main', {})

export const Intro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: '3rem',
  height: '45vh',

  h1: {
    fontSize: '$4xl',
    marginBottom: '0.875rem',
  },

  p: {
    color: '$text',
    fontSize: '$base',
    maxWidth: '50%',
  },

  a: {
    textDecoration: 'none',
    marginTop: '45px',
  },
})

export const IntroducingMyself = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'flex-start',
  gap: '2rem',

  h2: {
    fontSize: '$lg',
  },

  p: { fontSize: '$sm' },
})
