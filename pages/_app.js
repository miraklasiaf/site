import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider, CSSReset, useColorModeValue } from '@chakra-ui/core';

import { prismLightTheme, prismDarkTheme } from '@styles/prism';
import MDXComponents from '@components/mdx';
import Nprogress from '@components/nprogress';
import SEO from '../next-seo.config';
import theme from '@components/design-system';

const GlobalStyle = ({ children }) => {
  const color = useColorModeValue(prismLightTheme, prismDarkTheme);

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
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle>
          <CSSReset />
          <Nprogress />
          <DefaultSeo {...SEO} />
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <Component {...pageProps} />
        </GlobalStyle>
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;
