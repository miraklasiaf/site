import { parseISO, format } from 'date-fns'
import { useColorModeValue, Heading, Text, Flex, Stack, Avatar, Link, Box } from '@chakra-ui/react'
import { BlogSEO, Header, Footer } from '@/components/common'
import { ViewCounter, Container } from '@/components/ui'
import { siteMetadata } from '@/config'

const BlogHeader = ({ title, author, banner, publishedAt, slug, readingTime }) => {
  const textColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Stack w="full" direction={{ base: 'column' }} spacing={4}>
      <Heading letterSpacing="tight" as="h1" size="2xl">
        {title}
      </Heading>

      <Flex justify="space-between" align={['initial', 'center']} direction={['column', 'row']}>
        <Flex align="center">
          <Avatar size="xs" name="Faisal Karim" src="/static/images/faisal.png" mr={2} />
          <Text fontSize="sm" color={textColor}>
            {`${author} • `}
            {format(parseISO(publishedAt), 'dd MMMM yyyy')}
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
          {readingTime.text}
          {` • `}
          <ViewCounter id={slug} />
        </Text>
      </Flex>

      <img src={banner} />
    </Stack>
  )
}

const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.seo.openGraph.url}${slug}`
  )}`

export default function Blog({ frontmatter, children }) {
  const { title, description, author, publishedAt, editUrl, slug } = frontmatter
  const date = new Date(publishedAt).toISOString()

  console.log(slug)

  return (
    <>
      <BlogSEO title={title} description={description} author={author} date={date} slug={slug} />

      <Header />

      <Box as="main">
        <Container variant="copy">
          <Stack as="article" spacing={8} justifyContent="center" alignItems="flex-start" w="full">
            <BlogHeader {...frontmatter} />

            {children}

            <Box my={4}>
              <Link href={discussUrl(slug)} isExternal>
                Discuss on Twitter
              </Link>
              {` • `}
              <Link href={editUrl} isExternal>
                Edit on GitHub
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  )
}
