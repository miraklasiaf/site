import React from 'react';
import NextLink from 'next/link';
import { useColorModeValue, Button, Flex, Box, IconButton } from '@chakra-ui/core';
import styled from '@emotion/styled';

import useColorMode from '../lib/color-mode';

import { Sun, Moon } from './icons';
import Footer from './footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('white', 'rgba(23, 25, 35, 0.8)');
  const primarytextColor = useColorModeValue('black', 'white');
  const navBgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(23, 25, 35, 0.8)');
  const Icon = useColorModeValue(<Moon />, <Sun />);

  return (
    <>
      <StickyNav
        as="header"
        justify="space-between"
        align="center"
        maxWidth="900px"
        w="full"
        bg={navBgColor}
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <IconButton
          variant="ghost"
          aria-label="Toggle dark mode"
          icon={Icon}
          onClick={toggleColorMode}
        />
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Dashboard
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justify="center"
        direction="column"
        bg={bgColor}
        color={primarytextColor}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
