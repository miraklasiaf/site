import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug } from '@/lib/blog'
import { Uses, Markdown } from '@/components/common'

export default function UsesPage({ mdxSource, frontMatter }) {
  return (
    <Uses frontmatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...Markdown
        }}
      />
    </Uses>
  )
}

export async function getStaticProps() {
  const post = await getFileBySlug('uses', null)

  return { props: post }
}
