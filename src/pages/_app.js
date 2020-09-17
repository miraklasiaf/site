import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { Global, css } from '@emotion/core'
import { ChakraProvider, useColorModeValue } from '@chakra-ui/core'
import Nprogress from '@/components/nprogress'
import theme from '@/design-system'
import { prismLightTheme, prismDarkTheme } from '@/styles/prism'
import siteConfig from '@/configs/site-config'

const GlobalStyle = ({ children }) => {
  const color = useColorModeValue(prismLightTheme, prismDarkTheme)

  return (
    <>
      <Global
        styles={css`
          ${color};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
          }
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
      <ChakraProvider resetCSS theme={theme} portalZIndex={40}>
        <GlobalStyle>
          <Nprogress />
          <DefaultSeo {...siteConfig.seo} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
    </>
  )
}

export default App
