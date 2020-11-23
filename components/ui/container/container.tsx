import * as React from 'react'
import { chakra } from '@chakra-ui/core'

export type ContainerVariant = 'narrow' | 'copy' | 'container' | 'wide'

interface ContainerProps {
  variant?: ContainerVariant
}

export const Container: React.FC<ContainerProps> = ({
  children,
  variant = 'container',
  ...delegated
}) => {
  return (
    <chakra.div
      apply={`layout.${
        variant === 'narrow'
          ? 'narrow'
          : variant === 'copy'
          ? 'copy'
          : variant === 'container'
          ? 'container'
          : 'wide'
      }`}
      {...delegated}
    >
      {children}
    </chakra.div>
  )
}

export default Container
