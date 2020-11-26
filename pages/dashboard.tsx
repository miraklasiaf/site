import { useColorModeValue, Heading, Text, Flex, Stack, SimpleGrid } from '@chakra-ui/react'
import { Page, Github, Analytics } from '@/components/common'

export default function DashboardPage() {
  const color = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page title="Dashboard" description="My personal dashboard, build with Next.js API routes">
      <Stack spacing={8}>
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
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <Analytics />
            <Github />
          </SimpleGrid>
        </Flex>
      </Stack>
    </Page>
  )
}
