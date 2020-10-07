import { Box } from '@chakra-ui/core'

const Miraklasiaf = (props) => (
  <Box as="svg" width="500" height="500" viewBox="0 0 500 500" fill="none" {...props}>
    <circle cx="250" cy="250" r="250" fill="black" />
    <path d="M200 200H300L200 300V200Z" fill="white" />
    <path d="M325 125H375L325 175V125Z" fill="white" />
    <path d="M125 325H175L125 375V325Z" fill="white" />
    <path d="M125 125H325V175H125V125Z" fill="white" />
    <path d="M125 125H175V325H125V125Z" fill="white" />
    <path d="M300 300H200L300 200V300Z" fill="#161E2E" />
    <path d="M175 375L125 375L175 325V375Z" fill="#161E2E" />
    <path d="M375 175H325L375 125L375 175Z" fill="#161E2E" />
    <path d="M375 375H175V325H375V375Z" fill="#161E2E" />
    <path d="M375 375H325V175H375V375Z" fill="#161E2E" />
  </Box>
)

export default Miraklasiaf
