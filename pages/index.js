import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/core';
import Container from '@components/container';
import ProjectCard from '@components/project-card';

export default function IndexPage() {
  return (
    <Container>
      <Stack spacing={8} mx="auto" maxWidth="2xl">
        <Flex direction="column">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Faisal Karim
          </Heading>
          <Text>
            A Full Stack Software Engineer. You’ve found my personal slice of the internet –
            everything you want to know and more is here.
          </Text>
        </Flex>
        <Flex direction="column">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
            Projects
          </Heading>
          <ProjectCard title="Coming soon!" description="Coming soon" href="/" />
        </Flex>
      </Stack>
    </Container>
  );
}
