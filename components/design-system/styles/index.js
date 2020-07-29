import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    fontFamily: 'body',
    color: mode('cool-gray.900', 'white')(props),
    bg: mode('white', 'cool-gray.900')(props),
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props)
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'gray.600')(props),
      boxSizing: 'border-box',
      wordWrap: 'break-word'
    },
    lineHeight: 'normal',
    fontFeatureSettings: `'kern'`,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased'
  })
};

export default styles;
