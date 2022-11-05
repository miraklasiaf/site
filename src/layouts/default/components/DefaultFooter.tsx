import Link from 'next/link';
import { AppNowPlaying } from '@mira/core';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 dark:text-gray-400 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function AppFooter() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <AppNowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-600 transition"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/miraklasiaf">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/miraklasiaf">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/uses"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-600 transition"
          >
            Uses
          </Link>
        </div>
      </div>
    </footer>
  );
}
