import { Flex, Link, Heading, Text, Stack, Box, useColorModeValue } from '@chakra-ui/core'
import { Folder } from '@/components/icons'

export default function ProjectCard({ title, description, href, icon }) {
  const iconColor = useColorModeValue('gray.900', 'white')

  return (
    <Link
      mb={4}
      href={href}
      title={title}
      isExternal
      _hover={{
        boxShadow: 'lg',
        textDecoration: 'none'
      }}
    >
      <Flex align="center" borderWidth="1px" borderRadius={4} p={4}>
        <Box as={icon ? icon : Folder} w={8} h={8} ml={2} mr={6} color={iconColor} />
        <Stack>
          <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tighter">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Stack>
      </Flex>
    </Link>
  )
}
