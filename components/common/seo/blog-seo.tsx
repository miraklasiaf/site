import { NextSeo, ArticleJsonLd } from 'next-seo'
import { siteMetadata } from '@/config'

interface BlogSEOProps {
  author: string
  date: string
  title: string
  slug: string
  description: string
}

const BlogSEO = ({ title, description, slug, author, date }: BlogSEOProps) => {
  const url = `${siteMetadata.seo.openGraph.url}/blog/${slug}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title: title,
          description,
          images: [
            {
              url: `${siteMetadata.seo.openGraph.url}/api/og?title=${title}`
            }
          ]
        }}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        description={description}
        images={[`${siteMetadata.seo.openGraph.url}/api/og?title=${title}`]}
        datePublished={date}
        dateModified={date}
        authorName={author}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={author}
      />
    </>
  )
}

export default BlogSEO
