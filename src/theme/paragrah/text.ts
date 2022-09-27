import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: '1.4rem'
  },
  sizes: {
    sm: {
      mb: '10px',
      p: '2rem'
    },
    md: {
      mb: '10px',
      p: '2rem'
    }
  },
  variants: {
    spanForm: {
      color: 'primary',
      fontWeight: '700',
      fontSize: '6xl'

    },
    inputForm: {
      color: 'font',
      fontSize: '2rem'
    },
    defaultProps: {
      variant: 'inputForm',
      size: 'sm'
    }

  }
}
export default Text
