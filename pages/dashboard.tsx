import { useColorModeValue, Heading, Text, Flex, Stack, SimpleGrid } from '@chakra-ui/react'
import Analytics from '@/components/metrics/analytics'

import GitHub from '@/components/metrics/github'
import { Page } from '@/components/common'
import { Container } from '@/components/ui'

export default function DashboardPage() {
  const color = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page title="Dashboard" description="My personal dashboard, build with Next.js API routes">
      <Container>
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
      </Container>
    </Page>
  )
}
