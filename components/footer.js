import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/core';

import { Twitter } from './icons';

const Footer = () => (
  <Flex as="footer" justify="center" mb={4}>
    <Link href="https://twitter.com/miraklasiaf" title="Twitter" isExternal>
      <IconButton aria-label="Twitter" icon={<Twitter />} />
    </Link>
    <Link href="https://github.com/miraklasiaf" title="GitHub" isExternal>
      <IconButton aria-label="Github" icon={<Twitter />} />
    </Link>
    <Link href="mailto:faisalkarim96@gmail.com" title="Email" isExternal>
      <IconButton aria-label="Main" icon={<Twitter />} />
    </Link>
  </Flex>
);

export default Footer;
