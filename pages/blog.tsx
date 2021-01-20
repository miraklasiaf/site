import * as React from 'react'
import {
  useColorModeValue,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Page } from '@/components/common'
import { BlogCard } from '@/components/ui'
import { getAllFilesFrontMatter } from '@/lib/blog'

export default function BlogPage({ posts }) {
  const color = useColorModeValue('gray.700', 'gray.400')
  const [searchValue, setSearchValue] = React.useState('')

  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <Page
      title="Blog | Faisal Karim"
      description="Thoughts on the programming, tech, and my personal life"
      canonical="/blog"
    >
      <Stack spacing={8} justifyContent="center" alignItems="flex-start" mx="auto" mb={16}>
        <Stack direction="column" spacing={3}>
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Blog
          </Heading>
          <Text color={color}>
            {`I've been writing online since 2020, mostly about web development. In total, I've
              written ${posts.length} articles on this site. Use the search below to filter by
              title.`}
          </Text>
          <InputGroup>
            <Input
              aria-label="Search articles"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
            />
            <InputRightElement children={<SearchIcon h="32px" color="gray.300" />} />
          </InputGroup>
        </Stack>

        {!searchValue && (
          <Flex
            w="full"
            direction="column"
            justify="flex-start"
            align="flex-start"
            maxWidth="3xl"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              Most Popular
            </Heading>
            <BlogCard
              title="Hello World!"
              slug="hello-world"
              description="Finally, I was able to create my own blog"
            />
          </Flex>
        )}
        <Flex
          w="full"
          direction="column"
          justify="flex-start"
          align="flex-start"
          maxWidth="3xl"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            All Posts
          </Heading>
          {!filteredBlogPosts.length && 'No posts found.'}
          <Stack w="full">
            {filteredBlogPosts.map((frontMatter) => (
              <BlogCard key={frontMatter.title} {...frontMatter} />
            ))}
          </Stack>
        </Flex>
      </Stack>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
