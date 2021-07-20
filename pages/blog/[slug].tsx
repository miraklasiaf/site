import { MDXRemote } from 'next-mdx-remote'
import { getFiles, getFileBySlug } from '@/lib/mdx'
import { Blog, Markdown } from '@/components/common'

export default function BlogPage({ mdxSource, frontMatter }) {
  return (
    <Blog frontmatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...Markdown
        }}
      />
    </Blog>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug)

  return { props: post }
}
