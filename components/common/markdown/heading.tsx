import { Box, Heading } from '@chakra-ui/react'

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline'
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
)

export const H1 = ({ children, ...delegated }) => {
  return (
    <Heading as="h1" size="xl" my={4} {...delegated}>
      {children}
    </Heading>
  )
}

export const H2 = ({ children, ...delegated }) => {
  return (
    <DocsHeading as="h2" fontWeight="bold" size="lg" {...delegated}>
      {children}
    </DocsHeading>
  )
}

export const H3 = ({ children, ...delegated }) => {
  return (
    <DocsHeading as="h3" size="md" fontWeight="bold" {...delegated}>
      {children}
    </DocsHeading>
  )
}
