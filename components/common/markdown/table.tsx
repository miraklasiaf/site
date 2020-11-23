import { Box, useColorModeValue } from '@chakra-ui/react'

export const Table = (props) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
)

export const THead = (props) => {
  const bg = useColorModeValue('gray.50', 'whiteAlpha.100')

  return <Box as="th" bg={bg} fontWeight="semibold" p={2} fontSize="sm" {...props} />
}

export const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)
