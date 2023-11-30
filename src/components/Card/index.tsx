import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return <CardContainer>{children}</CardContainer>
}
