import { keyframes, styled } from '..'

const slideTop = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
  },
  '100%': {
    transform: 'translateY(0%)',
  },
})

const slideBottom = keyframes({
  '0%': {
    transform: 'translateY(200%)',
  },
  '100%': {
    transform: 'translateY(0%)',
  },
})

export const HomeContainer = styled('main', {})

export const Presentation = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  justifyContent: 'space-evenly',
  overflow: 'hidden',
})

export const Intro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  animation: `${slideTop} 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,

  h1: {
    fontSize: '$5xl',
  },

  p: {
    color: '$slate400',
    fontSize: '$base',
    maxWidth: '50%',
  },

  a: {
    textDecoration: 'none',
    marginTop: '$16',
  },
})

export const IntroducingMyself = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'flex-start',
  gap: '$12',

  animation: `${slideBottom} 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,

  h2: {
    fontSize: '$xl',
  },

  p: { fontSize: '$sm', color: '$slate400' },
})

export const TitleSection = styled('h2', {
  fontSize: '$4xl',
  marginBottom: '$12',
})

export const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '$16',
})

export const GitHubSummary = styled(SectionContainer, {
  '>div': {
    display: 'flex',
    gap: '$16',
  },
})

export const SummaryCard = styled('div', {
  width: '100%',
  minWidth: '240px',
  padding: '$12',
  borderRadius: '$sm',
  position: 'relative',

  background: 'linear-gradient(0deg, rgba(255,255,255, 0), $slate800 100%)',

  boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',

  span: {
    display: 'block',
    fontSize: '$sm',
    color: '$slate400',
    marginBottom: '$3',
  },

  strong: {
    fontSize: '$4xl',
    color: '$slate50',
  },
})

export const Experiences = styled(SectionContainer, {
  'p + p': {
    marginTop: '$6',
  },

  color: '$slate400',

  '>div': {
    backgroundColor: '$slate800',
    padding: '$12',
    borderRadius: '$sm',
    border: '1px solid rgba(148,163,184,.1)',
    fontSize: '$sm',
    lineHeight: '160%',
  },
})

export const Projects = styled(SectionContainer, {
  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$12',
    width: '100%',
  },

  a: {
    '>div': {
      height: '100%',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    textDecoration: 'none',
    color: '$slate50',

    '&:hover': {
      strong: {
        color: '$indigo400',

        svg: {
          color: '$indigo400',
          transform: 'translate(0.25rem, -0.25rem)',
          transition: 'all .15s cubic-bezier(.4,0,.2,1)',
        },
      },
    },
  },

  span: {
    fontSize: '$xs',
    fontWeight: 700,
    lineHeight: '1.25rem',
  },

  strong: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$3',
    fontSize: '$lg',
    color: '$slate50',
  },

  p: {
    borderRadius: '99999px',
    backgroundColor: '$indigo500',
    color: '$slate50',
    fontWeight: 700,
    width: 'max-content',
    padding: '$1 $4',
    textAlign: 'center',
    fontSize: '$xs',
    marginTop: '$5',

    boxShadow: '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148,163,184,.1)',
  },

  button: {
    marginTop: '$12',
  },
})
