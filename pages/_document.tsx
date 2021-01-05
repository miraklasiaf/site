import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { GAScript } from '@/lib/analytics'

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
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
          <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
          <meta name="monetization" content={process.env.ILP_URL} />
        </Head>
        <body>
          <GAScript />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
