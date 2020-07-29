import React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { Button, Flex, Box, IconButton } from '@chakra-ui/core';

import { routes } from '@utils/constants';
import ThemeToggle from './theme-toggle';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Header = () => {
  return (
    <StickyNav
      as="header"
      justify="space-between"
      align="center"
      w="full"
      maxWidth="4xl"
      py={4}
      mt={[0, 8]}
      mb={8}
      mx="auto"
    >
      <Box>
        {routes.map(([children, route]) => (
          <NextLink href={route} key={route} passHref>
            <Button as="a" variant="ghost" p={[1, 4]} fontWeight="medium">
              {children}
            </Button>
          </NextLink>
        ))}
      </Box>
      <ThemeToggle />
    </StickyNav>
  );
};

export default Header;
