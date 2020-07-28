import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/core';
import Container from '@components/container';
import ProjectCard from '@components/project-card';
import { Post } from '@components/blog';

import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx';

export default function IndexPage() {
  const color = useColorModeValue('gray.700', 'gray.400');

  return (
    <Container>
      <Stack spacing={8} mx="auto" maxWidth="3xl">
        <Flex direction="column" maxWidth="3xl">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Faisal Karim
          </Heading>
          <Text color={color}>
            I’m a Software Engineer living in Batam, Indonesia. You’ve found my personal slice of
            the internet – everything you want to know and more is here.
          </Text>
        </Flex>
        <Flex direction="column" maxWidth="3xl">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
            Most Popular
          </Heading>
          <Post {...stripeDesign} />
        </Flex>
        <Flex direction="column" maxWidth="3xl">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
            Projects
          </Heading>
          <ProjectCard title="Coming soon!" description="Coming soon" href="/" icon="react2025" />
        </Flex>
      </Stack>
    </Container>
  );
}
