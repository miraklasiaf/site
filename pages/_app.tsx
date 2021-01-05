import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { Global, css } from '@emotion/react'
import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import { Nprogress } from '@/components/ui'
import { theme, prismLightTheme, prismDarkTheme } from '@/components/design-system'
import { siteMetadata } from '@/config'
import { useAnalytics } from '@/lib/hooks'
import '@/styles/nprogress.css'
import '@/styles/font.css'

const GlobalStyle = ({ children }) => {
  const color = useColorModeValue(prismLightTheme, prismDarkTheme)

  return (
    <>
      <Global
        styles={css`
          ${color};
        `}
      />
      {children}
    </>
  )
}

const App = ({ Component, pageProps }) => {
  useAnalytics()

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <DefaultSeo {...siteMetadata.seo} />

      <ChakraProvider theme={theme}>
        <GlobalStyle>
          <Nprogress />
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
    </>
  )
}

export default App
