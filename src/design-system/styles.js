import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('black', 'white')(props),
      bg: mode('white', 'gray.900')(props),
      lineHeight: 'normal',
      minHeight: 'full'
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props)
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      boxSizing: 'border-box',
      wordWrap: 'break-word'
    },
    fontFeatureSettings: `'kern'`,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased'
  })
}

export default styles
