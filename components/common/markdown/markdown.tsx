import Image from 'next/image'
import { Kbd, Code } from '@chakra-ui/react'
import { P, UL, OL, LI, Blockquote, Hr } from './body'
import { H1, H2, H3 } from './heading'
import { Table, THead, TData } from './table'
import { CustomLink } from './link'

const Markdown = {
  Image,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  a: CustomLink,
  blockquote: Blockquote,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  kbd: Kbd,
  inlineCode: (props) => <Code variantColor="yellow" fontSize="0.84em" {...props} />
}

export default Markdown
