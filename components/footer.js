import { Stack, Link, Box, useColorModeValue } from '@chakra-ui/core';
import { links } from '@utils/constants';

const Footer = () => {
  const color = useColorModeValue('gray.500', 'gray.400');
  const bgColor = useColorModeValue('gray.200', 'gray.800');

  return (
    <Stack direction="row" as="footer" my={4} justify="center">
      {links.map(([icon, route, title]) => (
        <Link
          href={route}
          key={route}
          isExternal
          title={title}
          color={color}
          borderRadius="default"
          p={2}
          _hover={{ bg: bgColor }}
        >
          <Box as={icon} boxSize={6} />
        </Link>
      ))}
    </Stack>
  );
};

export default Footer;
