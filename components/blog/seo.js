import { NextSeo, ArticleJsonLd } from 'next-seo';
import { PLATFORM_URL, MY_NAME } from '@utils/constants';

export default function Seo({ title, summary, publishedAt, url, image }) {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `${PLATFORM_URL}${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} · ${MY_NAME}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName={MY_NAME}
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={MY_NAME}
        title={title}
        url={url}
      />
    </>
  );
}
