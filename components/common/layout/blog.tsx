import { parseISO, format } from 'date-fns'
import { useColorModeValue, Heading, Text, Flex, Stack, Avatar, Link, Box } from '@chakra-ui/react'
import { Page } from '@/components/common'
import { ViewCounter } from '@/components/ui'
import { siteMetadata } from '@/config'

const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.seo.openGraph.url}${slug}`
  )}`

export default function Blog({ frontmatter, children }) {
  const { title, author, publishedAt, readingTime, editUrl, slug } = frontmatter
  const date = new Date(publishedAt).toISOString()

  console.log(frontmatter)

  const textColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page
      variant="blog"
      url={`${siteMetadata.seo.openGraph.url}/blog/${slug}`}
      date={date}
      {...frontmatter}
    >
      <Stack as="article" spacing={8} justifyContent="center" alignItems="flex-start" w="full">
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          {title}
        </Heading>
        <Flex
          justify="space-between"
          align={['initial', 'center']}
          direction={['column', 'row']}
          mt={2}
          w="100%"
          mb={4}
        >
          <Flex align="center">
            <Avatar size="xs" name="Faisal Karim" src="/static/images/faisal.png" mr={2} />
            <Text fontSize="sm" color={textColor}>
              {`${author} / `}
              {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
            {readingTime.text}
            {` • `}
            <ViewCounter id={slug} />
          </Text>
        </Flex>

        {children}
        <Box>
          <Link href={discussUrl(slug)} isExternal>
            Discuss on Twitter
          </Link>
          {` • `}
          <Link href={editUrl} isExternal>
            Edit on GitHub
          </Link>
        </Box>
      </Stack>
    </Page>
  )
}
