import { Box } from '@chakra-ui/core'

export const Container = ({ children }) => (
  <Box mx="auto" px={5} maxW="3xl">
    {children}
  </Box>
)
