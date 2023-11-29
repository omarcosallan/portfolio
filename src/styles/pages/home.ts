import { styled } from '..'

export const HomeContainer = styled('main', {})

export const Intro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  textAlign: 'center',

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
