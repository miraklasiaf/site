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

// @ts-expect-error
import { frontMatter as blogPosts } from './blog/**/*.mdx'
// @ts-expect-error
import { frontMatter as helloWorld } from './blog/hello-world.mdx'

export default function BlogPage() {
  const [searchValue, setSearchValue] = React.useState('')
  const color = useColorModeValue('gray.700', 'gray.400')

  const filteredBlogPosts = blogPosts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <Page title="Blog" description="Thoughts on the programming, tech, and my personal life">
      <Stack spacing={8} justifyContent="center" alignItems="flex-start" mx="auto" mb={16}>
        <Stack direction="column" spacing={3}>
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Blog
          </Heading>
          <Text color={color}>
            {`I've been writing online since 2020, mostly about web development. In total, I've
              written ${blogPosts.length} articles on this site. Use the search below to filter by
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
            <BlogCard {...helloWorld} />
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
