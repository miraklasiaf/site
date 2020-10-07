import { Text, HStack, Link, Flex, Box, useColorModeValue } from '@chakra-ui/core'
import { links } from '@/utils/constants'

const Footer = () => {
  const color = useColorModeValue('gray.500', 'gray.400')
  const bgColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <Flex
      as="footer"
      direction={['column', 'row']}
      align="center"
      justify="space-between"
      w="full"
      maxW="2xl"
      my={8}
      mx="auto"
    >
      <Flex order={[2, null, 1]} mt={{ base: 8, md: 0 }}>
        <Text color={color} lineHeight={6} fontSize="sm">
          {' '}
          &copy; 2020 Faisal Karim
        </Text>
      </Flex>
      <HStack order={[1, null, 2]}>
        {links.map(([icon, route, title]) => (
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
        ))}
      </HStack>
    </Flex>
  )
}

export default Footer
