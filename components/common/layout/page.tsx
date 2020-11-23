import { Header, SEO } from '@/components/common'
import * as React from 'react'

interface PageProps {
  title?: string
  description?: string
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <>
      <SEO title={title || ''} description={description || ''} />
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Page
