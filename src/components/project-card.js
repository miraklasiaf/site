import {
  chakra,
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  Box,
  HStack,
  useColorModeValue
} from '@chakra-ui/core'
import { Folder } from '@/components/icons'

export const Badge = ({ children }) => {
  const color = useColorModeValue('gray.500', 'gray.300')
  const bgColor = useColorModeValue('gray.100', 'gray.800')

  return (
    <chakra.span
      display="inline-flex"
      alignItems="center"
      px={2}
      py={[0, null, 1]}
      borderRadius={8}
      lineHeight={4}
      fontSize={['0.5rem', 'xs']}
      fontWeight="medium"
      color={color}
      bg={bgColor}
    >
      {children}
    </chakra.span>
  )
}

export default function ProjectCard({ title, description, link, icon, techStack }) {
  const iconColor = useColorModeValue('gray.900', 'white')

  return (
    <Link
      mb={4}
      href={link}
      title={title}
      isExternal
      _hover={{
        boxShadow: 'md',
        textDecoration: 'none'
      }}
    >
      <Flex align="center" borderWidth="1px" borderRadius={4} p={4}>
        <Stack w="full">
          <Stack direction={['row', 'column']}>
            <Box as={icon ? icon : Folder} w={8} h={8} ml={2} mt={2} color={iconColor} />

            <Flex direction={{ base: 'column', sm: 'row' }} justify={['center', 'space-between']}>
              <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tighter">
                {title}
              </Heading>
              <HStack>
                {techStack.map((t, index) => (
                  <Badge key={index}>{t}</Badge>
                ))}
              </HStack>
            </Flex>
          </Stack>

          <Text>{description}</Text>
        </Stack>
      </Flex>
    </Link>
  )
}
