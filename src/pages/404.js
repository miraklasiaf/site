import NextLink from 'next/link'
import { Heading, Flex, Stack, Button } from '@chakra-ui/core'
import Head from 'next/head'

import Container from '@/components/container'

export default function Error() {
  return (
    <Container>
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
    </Container>
  )
}
