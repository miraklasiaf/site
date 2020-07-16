import React from 'react';
import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '@components/container';
import BlogPost from '@components/blog-post';
import ProjectCard from '@components/project-card';

import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx';

const Index = () => {
  const secondaryTextColor = useColorModeValue('gray.700', 'gray.400');

  return (
    <Container>
      <Stack spacing={8} mx="auto" maxWidth="700px">
        <Flex direction="column" maxWidth="700px">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Faisal Karim
          </Heading>
          <Text color={secondaryTextColor}>
            I’m a Software Engineer living in Batam, Indonesia. You’ve found my personal slice of
            the internet – everything you want to know and more is here.
          </Text>
        </Flex>
        <Flex direction="column" maxWidth="700px">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
            Most Popular
          </Heading>
          <BlogPost {...stripeDesign} />
        </Flex>
        <Flex direction="column" maxWidth="700px">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
            Projects
          </Heading>
          <ProjectCard title="Coming soon!" description="Coming soon" href="/" icon="react2025" />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
