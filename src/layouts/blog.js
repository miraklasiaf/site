import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/mdx'
import PageContainer from '@/components/page-container'

export default function BlogLayout({ frontmatter, children }) {
  return (
    <MDXProvider components={{ ...MDXComponents }}>
      <PageContainer frontmatter={frontmatter}>{children}</PageContainer>
    </MDXProvider>
  )
}
