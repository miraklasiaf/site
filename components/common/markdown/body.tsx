import { Box, Divider, Text, useColorModeValue } from '@chakra-ui/react'

export const P = ({ children, ...delegated }) => {
  return (
    <Text as="p" mt={4} lineHeight="tall" {...delegated}>
      {children}
    </Text>
  )
}

export const UL = ({ children, ...delegated }) => {
  return (
    <Box as="ul" pt={2} pl={4} ml={2} {...delegated}>
      {children}
    </Box>
  )
}

export const OL = ({ children, ...delegated }) => {
  return (
    <Box as="ol" pt={2} pl={4} ml={2} {...delegated}>
      {children}
    </Box>
  )
}

export const LI = ({ children, ...delegated }) => {
  return (
    <Box as="li" pb={1} {...delegated}>
      {children}
    </Box>
  )
}

export const Blockquote = (props) => {
  const bgColor = useColorModeValue('blue.50', 'blue.900')

  return (
    <Box
      mt={4}
      w="full"
      bg={bgColor}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
      {...props}
    />
  )
}

export const Hr = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return <Divider borderColor={borderColor} my={4} w="full" />
}
