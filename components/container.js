import React from 'react';
import { useColorModeValue, Flex } from '@chakra-ui/core';

import Footer from './footer';
import Header from './header';

const Container = ({ children }) => {
  const bgColor = useColorModeValue('white', 'rgba(23, 25, 35, 0.8)');

  return (
    <>
      <Header />
      <Flex as="main" justify="center" direction="column" bg={bgColor} px={8}>
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
