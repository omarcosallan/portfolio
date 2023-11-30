import { ReactNode } from 'react'
import { CardContainer } from './styles'
import { ComponentProps } from '@stitches/react'

type CardProps = ComponentProps<typeof CardContainer> & {
  children: ReactNode
}

export default function Card({ children, ...props }: CardProps) {
  return <CardContainer {...props}>{children}</CardContainer>
}
