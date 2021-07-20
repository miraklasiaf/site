import { NextSeo, ArticleJsonLd } from 'next-seo'
import { PLATFORM_URL } from '@/config'

interface BlogSEOProps {
  author: string
  date?: string
  title: string
  slug: string
  description: string
}

const BlogSEO = ({ title, description, slug, author, date }: BlogSEOProps) => {
  const url = `${PLATFORM_URL}/blog/${slug}`

  return (
    <>
      <NextSeo
        title={`${title} | Faisal Karim`}
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
              url: `${PLATFORM_URL}/api/og?title=${title}`,
              alt: title
            }
          ]
        }}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        description={description}
        images={[`${PLATFORM_URL}/api/og?title=${title}`]}
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
