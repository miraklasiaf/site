import { Text, HStack, Link, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { links } from '@/config/site-metadata'

const Footer = () => {
  const color = useColorModeValue('gray.500', 'gray.400')
  const bgColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <Flex
      as="footer"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
      w="full"
      maxW="700px"
      my={8}
      mx="auto"
    >
      <Flex align="center" order={{ base: 2, md: 1 }} mt={{ base: 8, md: 0 }}>
        <Text color={color} lineHeight={6} fontSize="sm">
          {' '}
          &copy; 2020 Faisal Karim
        </Text>
      </Flex>
      <HStack order={{ base: 1, md: 2 }}>
        {/* {links.map(([icon, route, title]) => (
          <Link
            href={route}
            key={route}
            isExternal
            title={title}
            color={color}
            borderRadius="default"
            p={1}
            _hover={{ bg: bgColor }}
          >
            <Box as={icon} boxSize={6} />
          </Link>
        ))} */}
      </HStack>
    </Flex>
  )
}

export default Footer
