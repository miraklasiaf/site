import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog'
};

export default function BlogPage() {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h1>
      {/* <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`I've been writing online since 2020, mostly about web development.
      In total, I've written ${posts.length} articles on this site.
      Use the search below to filter by title.`}
      </p> */}
    </div>
  );
}
