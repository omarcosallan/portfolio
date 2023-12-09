import { keyframes, styled } from '..'
import * as Tabs from '@radix-ui/react-tabs'

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
    fontSize: '$6xl',
    color: '$white',
    maxWidth: '70%',
  },

  p: {
    color: '$slate400',
    fontSize: '$lg',
    lineHeight: '$11',
    maxWidth: '70%',
    marginTop: '$10',
  },

  a: {
    textDecoration: 'none',
    marginTop: '$14',
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

  p: { fontSize: '$md', lineHeight: '$11', color: '$slate400' },
})

export const TitleSection = styled('h2', {
  fontSize: '$4xl',
  marginTop: '$7',
  marginBottom: '$10',
})

export const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '7rem',
})

export const GitHubSummary = styled(SectionContainer, {
  '>div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$16',
    width: '100%',

    '>svg': {
      color: '$violet400',
      width: '100%',
      height: '100%',
      maxWidth: '250px',
    },

    '>div': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: '$16',
      width: '100%',
    },
  },
})

export const SummaryCards = styled('div', {
  strong: {
    fontSize: '$xl',
    color: '$slate300',
    lineHeight: '$10',
  },

  p: {
    marginTop: '$5',
    fontSize: '$md',
    lineHeight: '$10',
  },
})

export const Experiences = styled(SectionContainer, {
  alignItems: 'flex-start',

  '>div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$16',

    button: {
      '&:hover': {
        transition: 'all .15s cubic-bezier(.4,0,.2,1)',
      },
    },
  },
})

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  alignItems: 'center',
  gap: '$16',
  padding: 0,
  paddingBottom: '$10',

  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$7',
    backgroundColor: 'transparent',
    color: '$slate50',
    border: 'none',

    span: {
      fontWeight: 700,
    },

    '&[data-state="active"]': {
      color: '$violet400',
    },
  },
})

export const Content = styled(Tabs.Content, {
  borderTop: '1px solid rgba(148,163,184,.1)',

  strong: {
    fontSize: '$xl',
  },

  p: {
    fontSize: '$md',
    lineHeight: '160%',
    color: '$slate300',
    marginTop: '$4',
  },

  div: {
    maxWidth: '60%',
    paddingTop: '$10',
  },
})

export const AtTheTime = styled(SectionContainer, {
  h2: {
    fontSize: '$5xl',
  },

  p: {
    textAlign: 'center',
    color: '$slate400',
    fontSize: '$lg',
    lineHeight: '$11',
    maxWidth: '70%',
  },

  figure: {
    display: 'flex',
    gap: '$7',
    marginTop: '$10',

    img: {
      borderRadius: '99999px',
    },

    strong: {
      color: '$slate50',
    },

    span: { color: '$slate400' },
  },

  figcaption: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    strong: {
      display: 'block',
    },
  },
})

export const Projects = styled(SectionContainer, {
  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$7',
    rowGap: '$16',
    width: '100%',
  },

  a: {
    textDecoration: 'none',

    '>div': {
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      gap: '$12',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },

  span: {
    fontSize: '$sm',
    fontWeight: 700,
    lineHeight: '1.25rem',
    color: '$violet400',
  },

  strong: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    fontSize: '$xl',
    color: '$slate50',
  },

  button: {
    marginTop: '$12',
    color: '$slate50',
    svg: { color: '$slate50' },

    '&:hover': {
      svg: {
        transform: 'translateX(0.2rem)',
        transition: 'all .15s cubic-bezier(.4,0,.2,1)',
      },
    },
  },
})

export const CodeInsights = styled(SectionContainer, {
  h2: {
    textAlign: 'center',
    marginBottom: '$16',
  },

  '>div >div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$16',
    width: '100%',

    a: {
      width: '100%',
      height: '100%',
      borderRadius: '$sm',
      overflow: 'hidden',

      border: '1px solid rgba(148, 163, 184, .1)',
    },
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.6s cubic-bezier(.165,.84,.44,1)',
    cursor: 'pointer',
    transform: 'scale(1.05)',

    '&:hover': {
      opacity: 0.9,
      transform: 'scale(1.15)',
    },
  },
})
