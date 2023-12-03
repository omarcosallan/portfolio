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
    color: '$slate50',
  },

  p: {
    color: '$slate400',
    fontSize: '$md',
    maxWidth: '70%',
  },

  a: {
    textDecoration: 'none',
    marginTop: '$9',
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
  marginTop: '7rem',
})

export const GitHubSummary = styled(SectionContainer, {
  '>div': {
    display: 'flex',
    gap: '$16',
  },

  figcaption: {
    display: 'flex',
    alignItems: 'center',
    gap: '$7',
    marginTop: '$3',

    img: {
      borderRadius: '99999px',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',

      strong: {
        fontSize: '$md',
        color: '$slate50',
      },

      span: {
        fontSize: '$sm',
        color: '$slate400',
      },
    },
  },
})

export const SummaryCard = styled('div', {
  width: '100%',
  minWidth: '240px',
  padding: '$12',
  borderRadius: '$sm',
  position: 'relative',

  background: 'linear-gradient(0deg, rgba(255,255,255, 0), $slate800 100%)',
  boxShadow: 'inset 0 1px 0 0 #ffffff0d',

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
      border: '1px solid rgba(148,163,184,.1)',
    },

    textDecoration: 'none',
    color: '$slate50',

    '&:hover': {
      '>div': {
        borderColor: 'transparent',
      },

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
    color: '$indigo400',
  },

  strong: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    fontSize: '$lg',
    color: '$slate50',
  },

  button: {
    marginTop: '$12',
  },
})

export const Tags = styled('div', {
  display: 'flex',
  gap: '$3',
  rowGap: '$1',
  flexWrap: 'wrap',
  marginTop: '$8',

  p: {
    borderRadius: '99999px',
    backgroundColor: '$indigo500',
    color: '$slate50',
    fontWeight: 700,
    width: 'max-content',
    padding: '$1 $4',
    textAlign: 'center',
    fontSize: '$xs',

    boxShadow: 'inset 0 1px 0 0 #ffffff0d',
  },
})

export const CodeInsights = styled(SectionContainer, {
  padding: '$12',
  borderRadius: '$sm',
  border: '1px solid rgba(148,163,184,.1)',

  '>div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$16',

    '>div': {
      maxWidth: '414px',

      div: {
        marginTop: '$10',
        paddingBottom: '$10',
        borderBottom: '1px solid rgba(148,163,184,.1)',
      },

      'div:last-child': {
        borderBottomColor: 'transparent',
      },
    },
  },

  span: {
    fontSize: '$xl',
    fontWeight: 700,
  },

  p: {
    color: '$slate400',
    marginTop: '$3',
    fontSize: '$sm',
  },

  img: {
    objectFit: 'cover',
    borderRadius: '$sm',
    border: '1px solid rgba(148,163,184,.1)',
    boxShadow: 'inset 0 1px 0 0 #ffffff0d',
  },

  a: {
    textDecoration: 'none',
    color: '$slate50',
    button: {
      color: '$slate50',

      svg: {
        color: '$slate50',
      },
    },

    '&:hover': {
      svg: {
        transform: 'translate(0.25rem, -0.25rem)',
        transition: 'all .15s cubic-bezier(.4,0,.2,1)',
      },
    },
  },
})
