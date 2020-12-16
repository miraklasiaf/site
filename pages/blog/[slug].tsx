import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '@/lib/mdx'
import { Blog, Markdown } from '@/components/common'

export default function BlogPage({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: Markdown
  })

  return <Blog frontmatter={frontMatter}>{content}</Blog>
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
