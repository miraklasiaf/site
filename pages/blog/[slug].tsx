import { MDXRemote } from 'next-mdx-remote'
import { getFiles, getFileBySlug } from '@/lib/mdx'
import { BlogLayout } from '@/components/layout'
import MDX from '@/components/MDX'

export default function BlogPage({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDX
        }}
      />
    </BlogLayout>
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
