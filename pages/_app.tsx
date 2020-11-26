import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { Global, css } from '@emotion/react'
import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import { Nprogress } from '@/components/ui'
import { theme, prismLightTheme, prismDarkTheme } from '@/components/common'
import { siteMetadata } from '@/config'

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
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Nprogress />

      <DefaultSeo {...siteMetadata.seo} />

      <ChakraProvider theme={theme}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
    </>
  )
}

export default App
