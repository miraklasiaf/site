import React from 'react';
import { useColorModeValue, Text, Flex, Box, Link } from '@chakra-ui/core';

import { ExternalLink } from '../icons';

const MetricCard = ({ header, link, metric }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box p={4} border="1px" borderColor={borderColor} borderRadius="lg" minWidth="300px">
      <Link href={link} isExternal>
        <Flex align="center">
          {header}
          <Box as={ExternalLink} size="32px" mx={2} color="blue.300" />
        </Flex>
      </Link>
      <Text mt={2} fontSize="3xl" fontWeight="bold" lineHeight="short">
        {metric || '-'}
      </Text>
    </Box>
  );
};

export default MetricCard;
