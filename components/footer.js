import React from 'react';
import { Stack, Link, Box, useColorModeValue } from '@chakra-ui/core';

import { links } from '../lib/constants';

const Footer = () => {
  const color = useColorModeValue('gray.500', 'gray.200');
  const bgColor = useColorModeValue('gray.200', 'gray.500');

  return (
    <Stack direction="row" as="footer" my={4} justify="center">
      {links.map(([icon, route, title]) => (
        <Link
          href={route}
          key={route}
          isExternal
          title={title}
          color={color}
          borderRadius="lg"
          p={2}
          _hover={{ bg: bgColor }}
        >
          <Box as={icon} />
        </Link>
      ))}
    </Stack>
  );
};

export default Footer;
