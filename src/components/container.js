import { Flex } from '@chakra-ui/core'
import Footer from './footer'
import Header from './header'

export default function Container({ children }) {
  return (
    <>
      <Header />
      <Flex as="main" w="full" justify="center" direction="column" px={8}>
        <Flex w="full" justify="center" align="center">
          <Flex direction="column" w="full" maxW="5xl">
            {children}
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
