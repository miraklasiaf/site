import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import { useColorModeValue, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';

import fetcher from '../lib/fetcher';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const secondaryTextColor = useColorModeValue('gray.700', 'gray.400');

  const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="full" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} width="full">
          <Flex w="full" justify="space-between" direction={['column', 'row']}>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text color="gray.500" minWidth="105px" textAlign={['left', 'right']} mb={[4, 0]}>
              {`${views ? format(views) : '–––'} views`}
            </Text>
          </Flex>
          <Text color={secondaryTextColor}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
