import colors from './colors'
import radii from './radius'
import shadows from './shadows'
import sizes, { baseSizes } from './sizes'
import typography from './typography'

const space = baseSizes

const theme = {
  radii,
  colors,
  ...typography,
  sizes,
  shadows,
  space
}

export default theme
