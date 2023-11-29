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

export const Card = styled('div', {
  position: 'relative',
  padding: '2rem',
  color: '$text',
  borderRadius: '$sm',

  fontSize: '0.875rem',
  fontWeight: '500',
  lineHeight: '160%',

  cursor: 'pointer',

  'h1, h2, h3': { color: '$white', marginBottom: '0.875rem' },

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    borderRadius: 'inherit',
    zIndex: -1,

    background: 'rgb(19 30 54)',
    backdropFilter: 'blur(2px)',
    boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',

    transition: 'all .20s ease',
    opacity: 0,
  },

  '&:hover::before': {
    opacity: 1,
  },
})

export const AboutMe = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'flex-start',
  gap: '2rem',

  h2: {
    fontSize: '$lg',
  },

  p: { fontSize: '$sm' },
})

export const IconWrraper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  position: 'relative',
  borderRadius: '$sm',

  marginBottom: '2rem',

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    borderRadius: 'inherit',
    zIndex: -1,

    background: 'rgb(19 30 54)',
    boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',
  },

  svg: {
    color: '$violet',
  },
})
