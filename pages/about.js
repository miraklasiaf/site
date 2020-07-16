import { NextSeo } from 'next-seo';
import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '@components/container';
import { CustomLink } from '@components/mdx';
import { PLATFORM_URL } from '@lib/constants';

const url = `${PLATFORM_URL}/about`;
const title = 'About · Faisal Karim';

const About = () => {
  const secondaryTextColor = useColorModeValue('gray.700', 'gray.400');

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
          maxWidth="700px"
        >
          <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="700px">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <Text color={secondaryTextColor} mb={4}>
              Hey, I'm Faisal. I live in Batam, Indonesia and I’m a Software Engineer.
            </Text>
            <Text color={secondaryTextColor} mb={4}>
              I grew up in small-town Batam and went to university at Pekanbaru, graduating with a
              degree in Computer Science. I spend my free time listening music, playing games, and
              enjoying time with friends and family.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
