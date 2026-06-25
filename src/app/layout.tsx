import '@/styles/global.css';

import { App } from './app';
import { STIX_Two_Text } from 'next/font/google';
import generateMetadata from '@/utils/generateMetadata';

/* eslint-disable react-refresh/only-export-components */
export const metadata = await generateMetadata();

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${stixTwoText.className} scrollbar-gutter:stable`}
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
      <body className="antialiased">
        <App>
          <main className="mt-0 w-full md:mt-16">{children}</main>
        </App>
      </body>
    </html>
  );
}
