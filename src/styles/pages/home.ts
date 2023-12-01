import { styled } from '..'

export const HomeContainer = styled('main', {})

export const Presentation = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
})

export const Intro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  h1: {
    fontSize: '$4xl',
    marginBottom: '$6',
  },

  p: {
    color: '$text',
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

  h2: {
    fontSize: '$lg',
  },

  p: { fontSize: '$sm' },
})

export const TitleSection = styled('h2', {
  fontSize: '$2xl',
  marginBottom: '$16',
})

export const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '$16',
})

export const GitHubSummary = styled(SectionContainer, {
  '>div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$16',

    width: 'calc(100% - $16)',
    boxShadow: '0 0 0 1px $violet',
  },
})

export const SummaryCard = styled('div', {
  display: 'grid',
  gridTemplateColumns: '20% 80%',

  span: {
    display: 'block',
    fontSize: '$sm',
    color: '$text',
    marginBottom: '$3',
  },

  strong: {
    fontSize: '$4xl',
    color: '$white',
  },
})

export const Experiences = styled(SectionContainer, {
  'p + p': {
    marginTop: '$6',
  },

  backgroundImage:
    'radial-gradient(300px 50% 50%, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
})
