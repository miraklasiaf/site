import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { Mdx } from 'components/mdx';

export const metadata: Metadata = {
  title: 'Uses',
  description: "Here's what tech I'm currently using for coding."
};

export default async function UsesPage() {
  const post = allPosts.find((post) => post.slug === 'uses');

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        My Gear
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding.
      </p>
      <div className="prose dark:prose-dark w-full">
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
}
