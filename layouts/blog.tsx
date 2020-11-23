import { MDXProvider } from '@mdx-js/react'
import { Markdown } from '@/components/common'
import PageContainer from '@/components/page-container'

export default function BlogLayout({ frontmatter, children }) {
  return (
    <MDXProvider components={{ ...Markdown }}>
      <PageContainer frontmatter={frontmatter}>{children}</PageContainer>
    </MDXProvider>
  )
}
