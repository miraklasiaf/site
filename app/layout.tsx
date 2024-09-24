import './global.css';

import { Inter } from 'next/font/google';

export * from './metadata';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} [scrollbar-gutter:stable]`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
