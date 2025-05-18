import './global.css';
import { Inter } from 'next/font/google';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { App } from './app';

export * from './metadata';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} [scrollbar-gutter:stable]`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-7966864664516090" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className="antialiased tracking-tight">
        <App>
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
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
    { name: 'github', url: 'https://github.com/miraklasiaf' },
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
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
