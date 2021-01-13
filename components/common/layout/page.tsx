import { Header, Footer, SEO } from '@/components/common'
import { Container } from '@/components/ui'
import { Box } from '@chakra-ui/react'
import * as React from 'react'

interface PageProps {
  title: string
  description?: string
}

export const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <>
      <SEO title={title || ''} description={description || ''} />
      <Header />
      <Box as="main">
        <Container variant="copy">{children}</Container>
      </Box>
      <Footer />
    </>
  )
}

export default Page
