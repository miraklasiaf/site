import { useColorModeValue, Heading, Text, Flex, Stack, SimpleGrid } from '@chakra-ui/core'
import SEO from '@/components/seo'
import { PLATFORM_URL } from '@/utils/constants'
import Analytics from '@/components/metrics/analytics'
import Layout from '@/components/layout'
import GitHub from '@/components/metrics/github'

const description = 'My personal dashboard, built with Next.js API routes'

export default function DashboardPage() {
  const color = useColorModeValue('gray.700', 'gray.400')

  return (
    <>
      <SEO
        title="Dashboard"
        description={description}
        openGraph={{
          url: `${PLATFORM_URL}/dashboard`,
          title: 'Dashboard',
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
      <Layout>
        <Stack spacing={8} m="0 auto 4rem auto" maxWidth="2xl">
          <Flex direction="column">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Dashboard
            </Heading>
            <Text color={color}>
              This is my personal dashboard, built with Next.js API routes deployed as serverless
              functions. I use this dashboard to track various metrics across platforms like GitHub,
              Blog views, and more.
            </Text>
          </Flex>
          <Flex direction="column" align="flex-start" maxWidth="3xl">
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
              <Analytics />
              <GitHub />
            </SimpleGrid>
          </Flex>
        </Stack>
      </Layout>
    </>
  )
}
