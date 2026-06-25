/* eslint-disable react-refresh/only-export-components */

import './global.css';

import { App } from './app';
import { Inter } from 'next/font/google';
import { ViewTransition } from 'react';

export { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.className} scrollbar-gutter:stable`}
    >
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-7966864664516090"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className="tracking-tight antialiased">
        <App>
          <div className="flex min-h-screen flex-col justify-between bg-white p-8 pt-0 text-gray-900 md:pt-8">
            <main className="mx-auto w-full max-w-[60ch] space-y-6">
              <ViewTransition name="auto">{children}</ViewTransition>
            </main>
            <Footer />
          </div>
        </App>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'twitter', url: 'https://x.com/miraklasiaf' },
    { name: 'github', url: 'https://github.com/miraklasiaf' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
