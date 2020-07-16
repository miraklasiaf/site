import React from 'react';
import NextLink from 'next/link';
import { useColorModeValue, Button, Flex, Box, IconButton } from '@chakra-ui/core';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

import useColorMode from '@lib/color-mode';
import { routes } from '@lib/constants';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const navBgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(23, 25, 35, 0.8)');
  const Icon = useColorModeValue(<MoonIcon size="32px" />, <SunIcon size="32px" />);

  return (
    <StickyNav
      as="header"
      justify="space-between"
      align="center"
      w="full"
      maxWidth="4xl"
      bg={navBgColor}
      p={4}
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
      <IconButton
        variant="ghost"
        aria-label="Toggle dark mode"
        icon={Icon}
        onClick={toggleColorMode}
      />
    </StickyNav>
  );
};

export default Header;
