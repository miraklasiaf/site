import { Code } from "@chakra-ui/react"
import { A, H1, H2, H3, H4, UL, LI, OL, P } from "@/components/common"

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const htmrTransform = {
  p: P,
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  ul: UL,
  ol: OL,
  li: LI,
  code: Code,
} as ComponentsType

export default htmrTransform
