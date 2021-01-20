import * as React from 'react'
import { Container } from '@/components/ui'
import { Header, Footer, SEO } from '@/components/common'

interface PageProps {
  title: string
  description?: string
  canonical?: string
}

export const Page: React.FC<PageProps> = ({ title, description, canonical, children }) => {
  return (
    <>
      <SEO title={title || ''} description={description || ''} canonical={canonical || ''} />
      <Header />
      <Container as="main" variant="copy">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Page
