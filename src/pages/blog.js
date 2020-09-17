import { useState } from 'react'
import {
  useColorModeValue,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/core'
import { SearchIcon } from '@chakra-ui/icons'
import Container from '@/components/container'
import { Post } from '@/components/blog'
import { PLATFORM_URL } from '@/utils/constants'
import SEO from '@/components/seo'

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/**/*.mdx'
import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx'

const url = `${PLATFORM_URL}/blog`
const title = 'Blog'
const description = 'Thoughts on the programming, tech, and my personal life.'

export default function BlogPage() {
  const [searchValue, setSearchValue] = useState('')
  const color = useColorModeValue('gray.700', 'gray.400')

  const filteredBlogPosts = blogPosts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          mx="auto"
          mb={16}
          maxWidth="2xl"
        >
          <Flex direction="column" justify="flex-start" align="flex-start">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
            <Text color={color}>
              {`I've been writing online since 2020, mostly about web development. In total, I've
              written ${blogPosts.length} articles on this site. Use the search below to filter by
              title.`}
            </Text>
            <InputGroup my={4} mr={4} w="full">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
              />
              <InputRightElement children={<SearchIcon size="32px" color="gray.300" />} />
            </InputGroup>
          </Flex>
          {!searchValue && (
            <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="3xl" mt={8}>
              <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                Most Popular
              </Heading>
              <Post {...stripeDesign} />
            </Flex>
          )}
          <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="3xl" mt={8}>
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              All Posts
            </Heading>
            {!filteredBlogPosts.length && 'No posts found.'}
            <Stack>
              {filteredBlogPosts.map((frontMatter) => (
                <Post key={frontMatter.title} {...frontMatter} />
              ))}
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
