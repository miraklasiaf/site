import NextLink from 'next/link'
import { Divider, Link, useColorModeValue, SimpleGrid, VStack } from '@chakra-ui/react'
import { Container } from '@/components/ui'

const NavLink = ({ href, ...rest }) => (
  <NextLink href={href} passHref>
    <Link
      fontWeight="light"
      _hover={{ color: useColorModeValue('gray.900', 'whiteAlpha.100') }}
      {...rest}
    />
  </NextLink>
)

export default function Footer() {
  return (
    <Container as="footer" apply="layout.copy" mt="8" pb="16">
      <Divider mb="8" />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
        <VStack spacing="3" align="flex-start">
          <NavLink href="/" children="Home" />
          <NavLink href="/about" children="About" />
        </VStack>
        <VStack spacing="3" align="flex-start">
          <Link
            href="https://twitter.com/miraklasiaf"
            isExternal
            fontWeight="light"
            _hover={{ color: useColorModeValue('gray.900', 'whiteAlpha.100') }}
            children="Twitter"
          />
          <Link
            href="https://github.com/miraklasiaf"
            isExternal
            fontWeight="light"
            _hover={{ color: useColorModeValue('gray.900', 'whiteAlpha.100') }}
            children="Github"
          />
        </VStack>
        <VStack spacing="3" align="flex-start">
          <NavLink href="/uses" children="Uses" />
        </VStack>
      </SimpleGrid>
    </Container>
  )
}
