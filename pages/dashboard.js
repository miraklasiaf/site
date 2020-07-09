import { NextSeo } from 'next-seo';
import { useColorModeValue, Heading, Text, Flex, Stack, SimpleGrid } from '@chakra-ui/core';

import { PLATFORM_URL } from '../lib/constants';
import Analytics from '../components/metrics/analytics';
import Container from '../components/container';
import GitHub from '../components/metrics/github';

const url = `${PLATFORM_URL}/dashboard`;
const title = 'Dashboard · Faisal Karim';
const description =
  'My personal dashboard, built with Next.js API routes deployed as serverless functions.';

const Dashboard = () => {
  const secondaryTextColor = useColorModeValue('gray.700', 'gray.400');

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: `${PLATFORM_URL}/static/images/dashboard.jpg`,
              alt: description,
              width: 1280,
              height: 720
            }
          ]
        }}
      />
      <Container>
        <Stack spacing={8} m="0 auto 4rem auto" maxWidth="700px">
          <Flex direction="column" maxWidth="700px">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Dashboard
            </Heading>
            <Text color={secondaryTextColor}>
              This is my personal dashboard, built with Next.js API routes deployed as serverless
              functions. I use this dashboard to track various metrics across platforms like GitHub,
              and more.
            </Text>
          </Flex>
          <Flex direction="column" align="flex-start" maxWidth="700px">
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
              <Analytics />
              <GitHub />
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
