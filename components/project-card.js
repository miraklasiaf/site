import { Flex, Link, Heading, Text, Stack, Icon, useColorModeValue } from '@chakra-ui/core';

export default function ProjectCard({ title, description, href, icon }) {
  const iconColor = useColorModeValue('gray.900', 'white');

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
        <Icon aria-label="LinkedIn" name={icon} color={iconColor} size="32px" ml={2} mr={4} />
        <Stack>
          <Heading as="h3" size="md" fontWeight="bold" mb={4} letterSpacing="tighter">
            {title}
          </Heading>
          <Text lineHeight="1.3">{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
}
