import { Flex } from '@chakra-ui/core'
import Footer from './footer'
import Header from './header'

export default function Container({ children }) {
  return (
    <>
      <Header />
      <Flex as="main" direction="column" justify="center" align="center" px={8}>
        {children}
      </Flex>
      <Footer />
    </>
  )
}
