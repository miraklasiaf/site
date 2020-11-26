import { NextSeo, ArticleJsonLd } from 'next-seo'
import * as React from 'react'

interface BlogSEOProps {
  title?: string
  description?: string
  url?: string
  date?: string
  author?: string
  featuredImage?: any
}

const BlogSEO: React.FC<BlogSEOProps> = ({
  title,
  description,
  url,
  date,
  featuredImage,
  author
}) => {
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
          title,
          description: description,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={date}
        datePublished={date}
        description={description}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={author}
        title={title}
        url={url}
      />
    </>
  )
}

export default BlogSEO
