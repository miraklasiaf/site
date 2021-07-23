import * as React from 'react'
import SEO from './SEO'
import PageFooter from './page-footer'
import PageHeader from './page-header'

interface PageProps {
  title: string
  description?: string
  children: React.ReactNode
}

export default function Page({ title, description, children }: PageProps) {
  return (
    <div className="bg-white dark:bg-black">
      <SEO title={title} description={description} />
      <PageHeader />
      <main id="skip" className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
        <PageFooter />
      </main>
    </div>
  )
}
