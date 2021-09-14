import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '@mira/config'

interface PageProps {
  title: string
  description?: string
  author?: string
  date?: string
  slug?: string
  image?: string
  layout: any
  children: React.ReactNode
}

export default function AppPage({ layout: Layout, children, ...customMeta }: PageProps) {
  const router = useRouter()
  const { siteName, siteUrl, twitterUsername } = config
  const meta = {
    title: `${siteName}`,
    description: `Fullstack web developer.`,
    image: `${config.siteUrl}/static/images/og.jpg`,
    type: 'website',
    ...customMeta
  }

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={`${siteUrl}${router.asPath}`} />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:site" content={twitterUsername} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Layout>{children}</Layout>
    </div>
  )
}
