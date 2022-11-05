import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
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
          rel="apple-touch-icon"
          href="/static/favicon/apple-touch-icon.png"
          sizes="180x180"
        />
        {[16, 32].map((size) => (
          <link
            key={size}
            rel="icon"
            type="image/png"
            sizes={`${size}x${size}`}
            href={`/static/favicon/favicon-${size}x${size}.png`}
          />
        ))}
        <meta
          name="google-site-verification"
          content={process.env.GOOGLE_SITE_VERIFICATION}
        />
        <meta name="monetization" content={process.env.ILP_URL} />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
