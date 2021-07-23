import * as React from 'react'
import SEO from './SEO'
import PageFooter from './page-footer'
import PageHeader from './page-header'

interface PageProps {
  title: string
  description?: string
  author?: string
  date?: string
  slug?: string
  children: React.ReactNode
}

export default function Page({ children, ...props }: PageProps) {
  return (
    <div className="bg-white dark:bg-black">
      <SEO {...props} />
      <PageHeader />
      <main id="skip" className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
        <PageFooter />
      </main>
    </div>
  )
}
