export const space = {
  px: '1px',
  unset: 'unset',
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
  72: '18rem'
}

export type Space = typeof space

const largeSizes = {
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '88rem',
  full: '100%',
  screen: '100vh'
}

const percentageSizes = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%'
}

const layouting = {
  widePlus: '128rem', // 2048px
  wide: '96rem', // 1536
  layoutPlus: '75rem', // 1200
  layout: '64rem', // 1024
  copyUltra: '61.25rem', // 980
  copyPlus: '48rem', // 768
  copy: '42.5rem', // 680
  narrowPlus: '37.5rem', // 600
  narrow: '32rem' // 512px
}

const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

const sizes = {
  ...space,
  ...largeSizes,
  ...percentageSizes,
  layouting,
  container
}

export type Sizes = typeof space & typeof largeSizes & { container: typeof container }

export default sizes
