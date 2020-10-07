import PageContainer from '@/components/page-container'
import dynamic from 'next/dynamic'

const BlogLayout = dynamic(() => import('./blog'))

export default function DefaultLayout({ frontMatter, children }) {
  const { slug } = frontMatter

  if (slug.startsWith('/blog')) {
    return <BlogLayout frontmatter={frontMatter}>{children}</BlogLayout>
  }

  return <PageContainer frontmatter={frontMatter}>{children}</PageContainer>
}
