import Image from 'next/image';
import Link from 'next/link';
import FeaturedBlogCard from '../../components/featured-blog-card';
import FeaturedProjectCard from '../../components/featured-project-card';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Faisal Karim
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Full Stack Web Developer based in Batam, Indonesia
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            You’ve found my personal slice of the internet – everything you want to know
            and more is here.
          </p>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt="Faisal Karim"
            height={176}
            width={176}
            src="/static/images/logo.jpg"
            className="rounded-full filter grayscale"
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Featured Posts
      </h3>
      <div className="flex gap-6 flex-col md:flex-row">
        <FeaturedBlogCard
          title="Hello World!"
          slug="hello-world"
          gradient="from-[#D8B4FE] to-[#818CF8]"
        />
        <FeaturedBlogCard
          title="Hello World!"
          slug="hello-world"
          gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
        />
        <FeaturedBlogCard
          title="Hello World!"
          slug="hello-world"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
        />
      </div>
      <Link
        href="/blog"
        className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
      >
        Read all posts
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 ml-1"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
          />
        </svg>
      </Link>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Featured Projects
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Here are some of my past works from personal projects and open source ones.
      </p>
      <FeaturedProjectCard
        index="01"
        href="https://grammarkup.vercel.app/"
        title="Grammarkup"
      />
    </div>
  );
}
