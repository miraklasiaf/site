import { useColorModeValue, Heading, Text, Flex, Stack, SimpleGrid } from '@chakra-ui/react'
import { Page, Github, Analytics } from '@/components/common'

export default function DashboardPage() {
  const color = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page
      title="Dashboard | Faisal Karim"
      description="My personal dashboard, build with Next.js API routes"
    >
      <Stack spacing={8}>
        <Stack direction="column" spacing={4}>
          <Heading letterSpacing="tight" as="h1" size="2xl">
            Dashboard
          </Heading>
          <Text color={color}>
            This is my personal dashboard, built with Next.js API routes deployed as serverless
            functions. I use this dashboard to track various metrics across platforms like GitHub,
            Blog views, and more.
          </Text>
        </Stack>
        <Flex direction="column" align="flex-start" maxWidth="3xl">
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={4} w="full">
            <Analytics />
            <Github />
          </SimpleGrid>
        </Flex>
      </Stack>
    </Page>
  )
}
