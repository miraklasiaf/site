import { AppMdx, AppPage, AppViewCounter } from '@mira/core';
import { Blog, allBlogs } from '../../../.contentlayer/generated';
import { format, parseISO } from 'date-fns';

import Image from 'next/image';
import config from '@mira/config';
import { useMDXComponent } from 'next-contentlayer/hooks';

const editUrl = (slug: string) =>
  `${config.githubRepositoryUrl}/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${config.siteUrl}/blog/${slug}`
  )}`;

export default function BlogPage(post: Blog) {
  const Component = useMDXComponent(post.body.code);

  return (
    <AppPage {...post}>
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
            <AppViewCounter slug={post.slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          <Component
            components={{
              ...AppMdx
            }}
          />
        </div>
        <div className="mt-8 text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </AppPage>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: post };
}
