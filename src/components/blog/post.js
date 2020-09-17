import NextLink from 'next/link'
import useSWR from 'swr'
import format from 'comma-number'
import fetcher from '@/lib/fetcher'
import { useColorModeValue, Heading, Text, Flex, Box, Link } from '@chakra-ui/core'

export default function Post(frontMatter) {
  const { title, summary } = frontMatter
  const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '')
  const color = useColorModeValue('gray.700', 'gray.400')

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher)
  const views = data?.total

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link
        w="full"
        borderWidth="1px"
        borderRadius="default"
        p={5}
        _hover={{
          boxShadow: 'lg',
          textDecoration: 'none'
        }}
      >
        <Box w="full">
          <Flex w="full" justify="space-between" direction={['column', 'row']}>
            <Heading size="md" as="h3" mb={2} fontWeight="semibold">
              {title}
            </Heading>
            <Text color="gray.500" minWidth="105px" textAlign={['left', 'right']} mb={[4, 0]}>
              {`${views ? format(views) : '–––'} views`}
            </Text>
          </Flex>
          <Text color={color}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  )
}
