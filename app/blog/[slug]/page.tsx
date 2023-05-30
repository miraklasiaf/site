import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allBlogs } from 'contentlayer/generated';
import { Mdx } from 'components/mdx';
import { format, parseISO } from 'date-fns';
import ViewCounter from 'components/view-counter';

const editUrl = (slug: string) =>
  `https://github.com/miraklasiaf/miraklasiaf.com/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://miraklasiaf.com/blog/${slug}`
  )}`;

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, description, banner, slug } = post;
  const ogImage = `https://miraklasiaf.com/og.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://miraklasiaf.com/blog/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

export default async function BlogPostPage({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {post.title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
        <div className="flex items-center">
          <Image
            alt="Faisal Karim"
            height={24}
            width={24}
            src="/static/images/logo.jpg"
            className="rounded-full"
          />
          <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
            {/* {post.by} */}
            {'Faisal Karim / '}
            {format(parseISO(post.publishedAt), 'dd MMMM yyyy')}
          </p>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {post.readingTime.text}
          {` • `}
          <ViewCounter slug={post.slug} />
        </p>
      </div>
      <div className="prose dark:prose-dark max-w-none w-full">
        <Mdx code={post.body.code} />
      </div>
      <div className="mt-8 text-sm text-gray-700 dark:text-gray-300">
        <a href={discussUrl(post.slug)} target="_blank" rel="noopener noreferrer">
          {'Discuss on Twitter'}
        </a>
        {` • `}
        <a href={editUrl(post.slug)} target="_blank" rel="noopener noreferrer">
          {'Edit on GitHub'}
        </a>
      </div>
    </article>
  );
}
