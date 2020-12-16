import NextLink from 'next/link'
import { Heading, Flex, Button } from '@chakra-ui/react'
import { Page } from '@/components/common'

export default function Error() {
  return (
    <Page title="404">
      <Flex direction="column" justify="center" align="center">
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          404 – Not Found
        </Heading>
        <NextLink href="/" passHref>
          <Button as="a" p={[1, 4]} w={48} fontWeight="bold" m="3rem auto 0">
            Return Home
          </Button>
        </NextLink>
      </Flex>
    </Page>
  )
}
