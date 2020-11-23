import Head from 'next/head'
import NextLink from 'next/link'
import Layout from '@/components/layout'
import { Heading, Flex, Stack, Button } from '@chakra-ui/core'

export default function Error() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="3xl"
      >
        <Flex direction="column" justify="flex-start" align="flex-start" maxWidth="3xl">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            404 – Not Found
          </Heading>
          <NextLink href="/" passHref>
            <Button as="a" p={[1, 4]} w={64} fontWeight="bold" m="3rem auto 0">
              Return Home
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Layout>
  )
}
