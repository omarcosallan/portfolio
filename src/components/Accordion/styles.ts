import { keyframes, styled } from '@/styles'
import * as Accordion from '@radix-ui/react-accordion'

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: '$sm',
  width: '100%',
})

export const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: '$10',

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px $violet400`,
  },

  '& + div': {
    paddingTop: '$10',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
  },
})

export const AccordionTrigger = styled(Accordion.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  padding: '0 $7',
  border: 'none',
  textAlign: 'left',
  width: '100%',

  fontSize: '$xl',
  fontWeight: 700,
  color: '$slate200',

  span: {
    flex: 1,
  },

  svg: {
    width: '24px',
    height: '24px',
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    '[data-state=open] &': { transform: 'rotate(180deg)' },
  },
})

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const Content = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: '$md',
  color: '$slate400',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

export const ContentText = styled('div', {
  padding: '$3 $7',
})
