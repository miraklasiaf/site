import { DefaultSeo } from 'next-seo'
import { siteMetadata } from '@/config'
import { useAnalytics } from '@/lib/hooks'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDX from '@/components/MDX'
import '@/styles/global.css'

const App = ({ Component, pageProps }) => {
  useAnalytics()

  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...siteMetadata.seo} />
      <MDXProvider components={MDX}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
