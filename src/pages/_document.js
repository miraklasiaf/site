import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/core'
import GoogleFonts from 'next-google-fonts'
import { GAScript } from '@/lib/gtag'

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="/static/favicon/browserconfig.xml" name="msapplication-config" />
          <meta
            name="google-site-verification"
            content="KfTyzAKabwlabC29C3S23xuqg6nq_fG94IRlnpFSNtI"
          />
          <link href="/static/favicon/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicon/site.webmanifest" rel="manifest" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
          <link
            href="/static/favicon/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicon/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicon/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link color="#4a9885" href="/static/favicon/safari-pinned-tab.svg" rel="mask-icon" />
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
