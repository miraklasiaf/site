import dynamic from 'next/dynamic'
import { Blog } from '@/components/common'

const MDXLayout = dynamic(() => import('./mdx'))

export default function DefaultLayout({ frontMatter, children }) {
  const { slug } = frontMatter

  if (slug.startsWith('/blog')) {
    return <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>
  }

  return <Blog frontmatter={frontMatter}>{children}</Blog>
}
