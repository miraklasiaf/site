import { NextSeo } from 'next-seo'
import { siteMetadata } from '@/config'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

export default function SEO({ title, description }: SEOProps) {
  const router = useRouter()

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`${siteMetadata.seo.openGraph.url}${router.asPath}`}
      openGraph={{
        url: `${siteMetadata.seo.openGraph.url}${router.asPath}`,
        title: title,
        description: description,
        images: [
          {
            url: `${siteMetadata.seo.openGraph.url}/static/images/og.jpg`,
            alt: title,
            width: 1280,
            height: 720
          }
        ]
      }}
    />
  )
}
