import React from 'react';
import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '../components/container';
import BlogPost from '../components/blog-post';
import ProjectCard from '../components/project-card';

import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx';
import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx';
import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx';

const Index = () => {
  const secondaryTextColor = useColorModeValue('gray.700', 'gray.400');

  return (
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
            Hey, I’m Faisal Karim
          </Heading>
          <Text color={secondaryTextColor}>
            I’m a Web Developer living in Batam, Indonesia. You’ve found my personal slice of the
            internet – everything you want to know and more is here.
          </Text>
        </Flex>
        <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="700px" mt={8}>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
          <BlogPost {...styleGuides} />
          <BlogPost {...stripeDesign} />
          <BlogPost {...monorepo} />
        </Flex>
        <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="700px">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <ProjectCard
            title="React 2025"
            description="Build and deploy a modern Jamstack application using the most popular open-source software."
            href="https://react2025.com/"
            icon="react2025"
          />
          <ProjectCard
            title="Mastering Next.js"
            description="A free video course for building static and server-side rendered applications with Next.js and React."
            href="https://masteringnextjs.com/"
            icon="nextjs"
          />
          <ProjectCard
            title="jamstackfns"
            description="The best serverless functions for JAMstack applications. Deploy to Vercel or Netlify for your static site."
            href="https://jamstackfns.com/"
            icon="jamstackfns"
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
