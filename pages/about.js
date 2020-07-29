import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/core';
import Container from '@components/container';
import { PLATFORM_URL } from '@utils/constants';
import { NextSeo } from 'next-seo';

const url = `${PLATFORM_URL}/about`;
const title = 'About · Faisal Karim';

export default function AboutPage() {
  const secondaryColor = useColorModeValue('gray.700', 'gray.400');

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Stack
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="2xl"
        >
          <Flex direction="column" justify="flex-start" align="flex-start">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <Text color={secondaryColor} mb={4}>
              Hey, I'm Faisal. I live in Batam, Indonesia and I’m a Software Engineer.
            </Text>
            <Text color={secondaryColor} mb={4}>
              I grew up in small-town Batam and went to Riau University at Pekanbaru, graduating
              with a degree in Computer Science. I spend my free time listening music, playing
              games, and enjoying time with friends and family.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
