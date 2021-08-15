import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import { useGa } from '~/hooks'
import MDX from '~/components/MDX'
import '~/styles/global.css'

const App = ({ Component, pageProps }) => {
  useGa()

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDX}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
