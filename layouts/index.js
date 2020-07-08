import React from 'react';
import { parseISO, format } from 'date-fns';
import { useColorModeValue, Heading, Text, Flex, Stack, Avatar, Link, Box } from '@chakra-ui/core';

import Container from '../components/container';
import ViewCounter from '../components/view-counter';
import BlogSeo from '../components/blog-seo';
import { PLATFORM_URL } from '../lib/constants';

const editUrl = (slug) =>
  `https://github.com/miraklasiaf/miraklasiaf.now.sh/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${PLATFORM_URL}/blog/${slug}`)}`;

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return ({ children }) => {
    const textColor = useColorModeValue('gray.700', 'gray.400');

    return (
      <Container>
        <BlogSeo url={`${PLATFORM_URL}/blog/${slug}`} {...frontMatter} />
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="full"
        >
          <Flex
            direction="column"
            justify="flex-start"
            align="flex-start"
            maxWidth="700px"
            w="full"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar size="xs" name="Faisal Karim" src="https://bit.ly/3falWUH" mr={2} />
                <Text fontSize="sm" color={textColor}>
                  {frontMatter.by}
                  {'Faisal Karim / '}
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
                {` • `}
                <ViewCounter id={slug} />
              </Text>
            </Flex>
          </Flex>
          {children}
          <Box>
            <Link href={discussUrl(slug)} isExternal>
              Discuss on Twitter
            </Link>
            {` • `}
            <Link href={editUrl(slug)} isExternal>
              Edit on GitHub
            </Link>
          </Box>
        </Stack>
      </Container>
    );
  };
};
