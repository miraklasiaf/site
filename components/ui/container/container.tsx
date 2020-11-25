import * as React from 'react'
import { chakra, BoxProps } from '@chakra-ui/react'

export type ContainerVariant = 'narrow' | 'copy' | 'container' | 'wide'

interface ContainerProps extends BoxProps {
  variant?: ContainerVariant
}

const Container: React.FC<ContainerProps> = ({ variant = 'container', ...delegated }) => {
  return <chakra.div apply={`layout.${variant}`} {...delegated} />
}

export default Container
