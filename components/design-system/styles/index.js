import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    fontFamily: 'body',
    color: mode('gray.800', 'whiteAlpha.900')(props),
    bg: mode('white', 'rgba(23, 25, 35, 0.8)')(props),
    lineHeight: 'base',
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
};

export default styles;
