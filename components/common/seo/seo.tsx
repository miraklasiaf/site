import { NextSeo } from 'next-seo'
import { siteMetadata } from '@/config'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

const SEO = ({ title, description, canonical }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    canonical={`${siteMetadata.seo.openGraph.url}${canonical}`}
    openGraph={{
      url: `${siteMetadata.seo.openGraph.url}${canonical}`,
      title: title,
      description: description,
      images: [
        {
          url: `${siteMetadata.seo.openGraph.url}/static/images/og.jpg`,
          alt: title,
          width: 1280,
          height: 720
        }
      ],
      site_name: title
    }}
  />
)

export default SEO
