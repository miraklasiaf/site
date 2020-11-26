import { Flex, Text, HStack, chakra, useColorModeValue, Link, IconButton } from '@chakra-ui/react'
import { Container } from '@/components/ui'
import { useSocials } from '@/utils'
import { siteMetadata } from '@/config'

const Footer = () => {
  const socials = useSocials()
  const color = useColorModeValue('gray.500', 'gray.400')

  return (
    <chakra.footer>
      <Container variant="copy">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          py={4}
        >
          <Flex align="center" order={{ base: 2, md: 1 }} mt={{ base: 4, md: 0 }}>
            <Text color={color} lineHeight={6} fontSize="sm">
              {siteMetadata.copyright}
            </Text>
          </Flex>

          <HStack order={{ base: 1, md: 2 }}>
            {socials.map(([href, Icon, label]) => (
              <IconButton
                as={Link}
                key={href}
                href={href}
                aria-label={label}
                title={label}
                icon={<Icon w={6} />}
                isExternal
                variant="link"
              />
            ))}
          </HStack>
        </Flex>
      </Container>
    </chakra.footer>
  )
}

export default Footer
