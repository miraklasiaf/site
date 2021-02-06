import hydrate from 'next-mdx-remote/hydrate'
import { getFileBySlug } from '@/lib/blog'
import { Uses, Markdown } from '@/components/common'

export default function UsesPage({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: Markdown
  })

  return <Uses frontmatter={frontMatter}>{content}</Uses>
}

export async function getStaticProps() {
  const post = await getFileBySlug('uses', null)

  return { props: post }
}
