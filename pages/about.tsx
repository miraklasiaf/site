import { useColorModeValue, Heading, Text, Stack } from '@chakra-ui/react'
import { Page } from '@/components/common'

export default function AboutPage() {
  const secondaryColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page title="About | Faisal Karim" canonical="/about">
      <Stack spacing={8} justifyContent="center" alignItems="flex-start">
        <Stack direction="column" justify="flex-start" align="flex-start" spacing={4}>
          <Heading letterSpacing="tight" as="h1" size="2xl">
            About Me
          </Heading>
          <Text color={secondaryColor}>
            Hi, I'm Faisal. I live in Batam, Indonesia and I’m a Software Engineer.
          </Text>
          <Text color={secondaryColor}>
            I grew up in small-town Batam and went to Riau University at Pekanbaru, graduating with
            a degree in Computer Science. I spend my free time listening music, playing games, and
            enjoying time with friends and family.
          </Text>
        </Stack>
      </Stack>
    </Page>
  )
}
