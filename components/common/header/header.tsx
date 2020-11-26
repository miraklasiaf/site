import React from 'react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { Button, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { routes } from '@/config/site-metadata'
import { ThemeSwitcher } from '@/components/ui'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

export default function Header() {
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'bg.dark')

  return (
    <StickyNav
      as="header"
      justify="space-between"
      align="center"
      w="full"
      maxWidth="4xl"
      mt={[0, 8]}
      mb={8}
      py={8}
      px={{ base: 4, md: 0 }}
      mx="auto"
      bg={bgColor}
    >
      <Box ml={{ base: -1, md: 0 }}>
        {routes.map(([children, route]) => (
          <NextLink href={route} key={route} passHref>
            <Button as="a" variant="ghost" p={[1, 4]} fontWeight="medium">
              {children}
            </Button>
          </NextLink>
        ))}
      </Box>
      <ThemeSwitcher />
    </StickyNav>
  )
}
