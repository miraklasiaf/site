import { Flex } from '@chakra-ui/core';
import Footer from './footer';
import Header from './header';

export default function Container({ children }) {
  return (
    <>
      <Header />
      <Flex as="main" justify="center" direction="column" px={8}>
        {children}
        <Footer />
      </Flex>
    </>
  );
}
