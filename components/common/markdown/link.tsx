import { useColorModeValue, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const CustomLink = (props) => {
  const color = useColorModeValue('hsl(208, 99%, 44%)', 'hsl(208, 95%, 68%)')

  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color} {...props} />
      </NextLink>
    )
  }

  return <Link color={color} isExternal {...props} />
}
