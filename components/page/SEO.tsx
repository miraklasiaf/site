import { NextSeo, ArticleJsonLd } from 'next-seo'
import { siteMetadata } from '@/config'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description?: string
  author?: string
  date?: string
}

export default function SEO({ title, description, author, date }: SEOProps) {
  const router = useRouter()
  const url = `${siteMetadata.seo.openGraph.url}${router.asPath}`
  const defaultOgUrl = `${siteMetadata.seo.openGraph.url}/static/images/og.jpg`
  const generateOgUrl = `${siteMetadata.seo.openGraph.url}/api/og?title=${title}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          // blog page seo
          type: date && 'article',
          article: date && {
            publishedTime: date
          },
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: date ? generateOgUrl : defaultOgUrl,
              alt: title,
              width: 1280,
              height: 720
            }
          ]
        }}
      />
      // blog page seo
      {date && (
        <ArticleJsonLd
          url={url}
          title={title}
          description={description}
          images={[generateOgUrl]}
          datePublished={date}
          dateModified={date}
          authorName={author}
          publisherLogo="/static/favicons/android-chrome-192x192.png"
          publisherName={author}
        />
      )}
    </>
  )
}
