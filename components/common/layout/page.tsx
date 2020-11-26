import { Header, Footer, SEO, BlogSEO } from '@/components/common'
import { Container } from '@/components/ui'
import { Box } from '@chakra-ui/react'
import * as React from 'react'

export type SEOVariant = 'non-blog' | 'blog'

interface PageProps {
  title: string
  description?: string
  variant?: SEOVariant
}

export const Page: React.FC<PageProps> = ({
  title,
  description,
  variant = 'non-blog',
  children
}) => {
  return (
    <>
      {variant === 'non-blog' ? (
        <SEO title={title || ''} description={description || ''} />
      ) : (
        <BlogSEO title={title} description={description} />
      )}

      <Header />
      <Box as="main">
        <Container variant="copy">{children}</Container>
      </Box>
      <Footer />
    </>
  )
}

export default Page
