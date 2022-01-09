import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { GAScript } from '@mira/lib/ga';

class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="msapplication-config"
            content="/static/favicon/browserconfig.xml"
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="preload"
            href="/static/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="apple-touch-icon"
            href="/static/favicon/apple-touch-icon.png"
            sizes="180x180"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <meta
            name="google-site-verification"
            content={process.env.GOOGLE_SITE_VERIFICATION}
          />
          <meta name="monetization" content={process.env.ILP_URL} />
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <GAScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
