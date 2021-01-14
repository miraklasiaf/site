import { NextSeo } from 'next-seo'
import { siteMetadata } from '@/config'

interface SEOProps {
  title: string
  description: string
}

const SEO = ({ title, description }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    canonical={siteMetadata.seo.openGraph.url}
    openGraph={{
      url: siteMetadata.seo.openGraph.url,
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
