import { theme as defaultTheme } from '@chakra-ui/react'
import foundations from './foundations'
import styles from './styles'
import { mdx } from './mdx'

const theme = {
  ...defaultTheme,
  ...foundations,
  styles,
  mdx,
  layout: {
    container: {
      maxWidth: ['layout', null, 'layoutPlus'],
      width: '100%',
      mx: 'auto',
      px: 4
    },
    wide: {
      width: '100%',
      mx: 'auto',
      px: 4,
      maxWidth: ['layout', null, 'wide']
    },
    copy: {
      width: '100%',
      mx: 'auto',
      px: 4,
      maxWidth: ['copy', null, 'copyPlus']
    },
    narrow: {
      width: '100%',
      mx: 'auto',
      px: 4,
      maxWidth: ['narrow', null, 'narrowPlus']
    }
  }
}

export default theme
