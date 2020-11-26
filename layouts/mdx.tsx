import { MDXProvider } from '@mdx-js/react'
import { Markdown, Blog } from '@/components/common'

export default function MDXLayout({ frontmatter, children }) {
  return (
    <MDXProvider components={{ ...Markdown }}>
      <Blog frontmatter={frontmatter}>{children}</Blog>
    </MDXProvider>
  )
}
