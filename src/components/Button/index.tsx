import { ReactNode } from 'react'
import { ButtonContainer } from './styles'
import { ComponentProps } from '@stitches/react'

type ButtonProps = ComponentProps<typeof ButtonContainer> & {
  children: ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
