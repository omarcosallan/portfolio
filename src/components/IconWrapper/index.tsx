import { ReactNode } from 'react'
import { IconWrapperContainer } from './styles'

interface IconWrapperProps {
  children: ReactNode
}

export default function IconWrapper({ children }: IconWrapperProps) {
  return <IconWrapperContainer>{children}</IconWrapperContainer>
}
