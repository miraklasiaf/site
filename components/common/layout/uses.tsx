import { Heading, Flex, Stack } from '@chakra-ui/react'
import { Page } from '@/components/common'
import { Container } from '@/components/ui'

const BlogHeader = ({ title }) => {
  return (
    <Stack w="full" direction={{ base: 'column' }} spacing={4}>
      <Heading letterSpacing="tight" as="h1" size="2xl">
        {title}
      </Heading>
      <Flex justify="space-between" align={['initial', 'center']} direction={['column', 'row']}>
        Here's what tech I'm currently using for coding.
      </Flex>
    </Stack>
  )
}

export default function Uses({ frontmatter, children }) {
  return (
    <Page
      title="Uses | Faisal Karim"
      description="Here's what tech I'm currently using for coding."
      canonical="/uses"
    >
      <Container as="main" variant="copy">
        <Stack as="article" spacing={8} justifyContent="center" alignItems="flex-start" w="full">
          <BlogHeader {...frontmatter} />
          {children}
        </Stack>
      </Container>
    </Page>
  )
}
