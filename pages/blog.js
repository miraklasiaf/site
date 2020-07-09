import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorModeValue,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/core';
import { SearchIcon } from '@chakra-ui/icons';

import Container from '../components/container';
import BlogPost from '../components/blog-post';
import { PLATFORM_URL } from '../lib/constants';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx';
import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx';
import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx';

const url = `${PLATFORM_URL}/blog`;
const title = 'Blog · Faisal Karim';
const description =
  'Thoughts on the software industry, programming, tech, videography, music, and my personal life.';

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const secondaryTextColor = useColorModeValue('gray.700', 'gray.400');

  const filteredBlogPosts = blogPosts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="700px">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
            <Text color={secondaryTextColor}>
              {`I've been writing online since 2014, mostly about web development and tech careers.
                In total, I've written ${blogPosts.length} articles on this site.
                Use the search below to filter by title.`}
            </Text>
            <InputGroup my={4} mr={4} w="full">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
              />
              <InputRightElement mt={3}>
                <SearchIcon size="32px" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          {!searchValue && (
            <Flex
              direction="column"
              justify="flex-start"
              align="flex-start"
              maxWidth="700px"
              mt={8}
            >
              <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                Most Popular
              </Heading>
              <BlogPost {...styleGuides} />
              <BlogPost {...stripeDesign} />
              <BlogPost {...monorepo} />
            </Flex>
          )}
          <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="700px" mt={8}>
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              All Posts
            </Heading>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
