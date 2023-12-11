import { keyframes, styled } from '..'
import * as Tabs from '@radix-ui/react-tabs'

import bgGradient from '../../assets/gradient.jpg'

type Axis = 'X' | 'Y'

const slide = (start: Axis) =>
  keyframes({
    '0%': { transform: `translate${start}(${start === 'Y' ? '-' : ''}100%)` },
    '100%': { transform: `translate${start}(0%)` },
  })

export const HomeContainer = styled('main', {})

export const Presentation = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  justifyContent: 'space-around',
  overflow: 'hidden',
})

export const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '7rem',
  maxWidth: '1160px',
  marginInline: 'auto',
  paddingInline: '$7',
})

export const TitleSection = styled('h2', {
  textAlign: 'center',
  fontSize: '$4xl',
  marginTop: '$7',
  marginBottom: '$16',
  lineHeight: '$16',

  '@media (min-width: 768px)': {
    textAlign: 'left',
  },
})

export const DescriptionSection = styled('p', {
  fontSize: '$md',
  lineHeight: '$10',
  color: '$slate400',
  marginTop: '$5',
})

export const Intro = styled(SectionContainer, {
  justifyContent: 'flex-start',
  textAlign: 'center',
  paddingInline: 0,

  h1: {
    fontSize: '$2xl',
    color: '$white',
    maxWidth: '100%',
    marginInline: '$7',

    '@media (min-width: 640px)': {
      fontSize: '$6xl',
      maxWidth: '70%',
      marginInline: 0,
    },
  },

  p: {
    color: '$slate400',
    fontSize: '$lg',
    lineHeight: '$11',
    maxWidth: '70%',
    marginTop: '$10',
  },

  a: { textDecoration: 'none', marginTop: '$14' },

  '>svg': { color: '$slate300', marginTop: '$16' },
})

export const GitHubSummary = styled(SectionContainer, {
  '>div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$16',
    width: '100%',

    '>div': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '$16',
      width: '100%',

      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      },
    },
  },
})

export const SummaryCards = styled('div', {
  '>div': {
    cursor: 'initial',
  },
  strong: { fontSize: '$xl', color: '$slate300', lineHeight: '$10' },
})

export const Experiences = styled(SectionContainer, {
  alignItems: 'flex-start',
  '>div': { display: 'flex', gap: '$16', overflow: 'hidden' },
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
    color: '$slate500',
    border: 'none',

    span: { fontWeight: 700 },

    '&:hover': {
      color: '$slate400',
      transition: 'all .15s cubic-bezier(.4,0,.2,1)',
    },

    '&[data-state="active"]': {
      color: '$violet400',
    },
  },
})

export const Content = styled(Tabs.Content, {
  minHeight: '200px',
  borderTop: '1px solid rgba(148,163,184,.1)',

  strong: { fontSize: '$xl' },

  div: {
    maxWidth: '100%',
    paddingTop: '$10',
    animation: `${slide('X')} .4s cubic-bezier(0.16, 1, 0.3, 1)`,

    '@media (min-width: 640px)': {
      maxWidth: '60%',
    },
  },
})

export const AtTheTime = styled(SectionContainer, {
  h2: {
    fontSize: '$4xl',

    '@media (min-width: 640px)': {
      fontSize: '$5xl',
    },
  },

  p: {
    textAlign: 'center',
    color: '$slate400',
    fontSize: '$md',
    lineHeight: '$11',
    maxWidth: '100%',
  },

  figure: {
    display: 'flex',
    gap: '$7',
    marginTop: '$10',
    img: { borderRadius: '99999px' },
    strong: { color: '$slate50' },
    span: { color: '$slate400' },
  },

  figcaption: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    strong: { display: 'block' },
  },

  '@media (min-width: 768px)': {
    p: {
      fontSize: '$lg',
      maxWidth: '70%',
    },
  },
})

export const Projects = styled(SectionContainer, {
  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '$7',
    rowGap: '$16',
    width: '100%',

    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
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

    '&:hover': {
      svg: {
        transform: 'translate(0.25rem, -0.25rem)',
        transition: 'all .15s cubic-bezier(.4,0,.2,1)',
      },
    },
  },

  '>a': { marginTop: '$12' },

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

export const Languages = styled(SectionContainer, {
  flexDirection: 'column',
  gap: '$16',
  width: '100%',

  h2: { marginBottom: '$12' },

  '>div >div': {
    marginTop: '$16',
    display: 'flex',
    gap: '$7',
    justifyContent: 'center',
    flexWrap: 'wrap',
    rowGap: '$1',

    p: {
      maxWidth: '100%',
    },

    '@media (min-width: 768px)': {
      justifyContent: 'flex-start',
    },
  },

  '>img': {
    objectFit: 'cover',
    border: '1px solid rgba(148, 163, 184, .1)',
    borderRadius: '$sm',
    display: 'none',

    '@media (min-width: 768px)': {
      display: 'initial',
    },
  },

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export const CodeInsights = styled(SectionContainer, {
  h2: {
    textAlign: 'center',
    lineHeight: '$16',
  },

  '>div >div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '$16',
    width: '100%',

    a: {
      width: '100%',
      height: '100%',
      borderRadius: '$sm',
      overflow: 'hidden',
      border: '1px solid rgba(148, 163, 184, .1)',
    },

    '@media (min-width: 640px)': {
      flexDirection: 'row',
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

export const Timeline = styled(SectionContainer, {
  maxWidth: '100vw',
  paddingInline: 0,

  h2: {
    fontSize: '$4xl',

    '@media (min-width: 640px)': {
      fontSize: '$5xl',
    },
  },

  p: { fontSize: '$lg', color: '$slate400' },

  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '7rem 0',
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        $slate900 100%
      ),
      url(${bgGradient.src})
    `,
    backgroundSize: 'cover',
    borderTop: '1px solid rgba(148, 163, 184, .1)',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',

    '>h2, >p': {
      maxWidth: '100%',
      textAlign: 'center',
      paddingInline: '$7',

      '@media (min-width: 640px)': {
        maxWidth: '45%',
        paddingInline: 0,
      },
    },

    '>svg': { color: '$slate300', marginTop: '$7' },
  },
})

export const Line = styled('div', {
  width: '1px',
  height: '100%',
  backgroundColor: '$slate700',
  position: 'absolute',
})

export const TimelineContent = styled('div', {
  display: 'flex',
  gap: '$7',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  maxWidth: '1160px',
  marginInline: 'auto',
  paddingInline: '$16',

  '>div': {
    '>article': {
      marginLeft: '$16',
      paddingBottom: '$12',
      borderRadius: '$sm',
      position: 'relative',

      svg: {
        position: 'absolute',
        top: 0,
        left: 'calc(-$16 - .5rem)',
        color: '$slate500',
        backgroundColor: '$slate900',
      },

      strong: { fontSize: '$md', color: '$slate200', display: 'block' },

      span: { color: '$slate500', fontSize: '$sm', fontWeight: 700 },

      p: {
        fontSize: '$md',
        color: '$slate500',
        marginTop: '$4',
        marginBottom: '$7',
      },
    },
  },

  '@media (min-width: 640px)': {
    paddingInline: 0,
  },
})
