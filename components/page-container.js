import { Seo } from '@/components/blog'
import Layout from './layout'
import { parseISO, format } from 'date-fns'
import { useColorModeValue, Heading, Text, Flex, Stack, Avatar, Link, Box } from '@chakra-ui/core'
import ViewCounter from '@/components/view-counter'
import { PLATFORM_URL } from '@/utils/constants'

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${PLATFORM_URL}${slug}`)}`

export default function PageContainer({ frontmatter, children }) {
  const { title, by, publishedAt, readingTime, editUrl, slug } = frontmatter
  const textColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Layout>
      <Seo url={`${PLATFORM_URL}/blog/${slug}`} {...frontmatter} />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="full"
      >
        <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="700px" w="full">
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
                {by}
                {'Faisal Karim / '}
                {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {readingTime.text}
              {` • `}
              <ViewCounter id={slug} />
            </Text>
          </Flex>
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
    </Layout>
  )
}
