export const mdx = {
  h1: {
    mt: '2rem',
    mb: '.25rem',
    lineHeight: 1.2,
    fontWeight: 'bold',
    fontSize: '1.875rem',
    letterSpacing: '-.025em'
  },
  h2: {
    mt: '4rem',
    mb: '0.5rem',
    lineHeight: 1,
    fontWeight: 'semibold',
    fontSize: '1.5rem',
    letterSpacing: '-.025em',
    '& + h3': {
      mt: '1.5rem'
    }
  },
  h3: {
    mt: '3rem',
    lineHeight: 1.25,
    fontWeight: 'semibold',
    fontSize: '1.25rem',
    letterSpacing: '-.025em'
  },
  h4: {
    mt: '3rem',
    lineHeight: 1.375,
    fontWeight: 'semibold',
    fontSize: '1.125rem'
  },
  a: {
    color: 'teal.500',
    fontWeight: 'semibold',
    transition: 'color 0.15s',
    transitionTimingFunction: 'ease-out',
    _hover: {
      color: 'teal.600'
    }
  },
  p: {
    mt: '1.25rem',
    lineHeight: 1.7,
    'blockquote &': {
      mt: 0
    }
  },
  hr: {
    my: '4rem'
  },
  ul: {
    mt: '1.5rem',
    ml: '1.25rem',
    'blockquote &': { mt: 0 },
    '& > * + *': {
      mt: '0.25rem'
    }
  },
  code: {
    rounded: 'sm',
    px: '1',
    fontSize: 'base',
    py: '2px',
    whiteSpace: 'nowrap',
    lineHeight: 'normal'
  }
}
