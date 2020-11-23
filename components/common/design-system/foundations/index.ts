import colors from './colors'
import radii from './radii'
import shadows from './shadows'
import sizes, { space } from './sizes'
import typography from './typography'
import borders from './borders'

export const foundations = {
  space,
  sizes,
  radii,
  ...typography,
  colors,
  shadows,
  borders
}

export default foundations
