import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Button: ComponentStyleConfig = {
  baseStyle: {
    transition: '1s'
  },
  variants: {
    btnForm: {
      bg: 'purple.500',
      color: 'grai',
      w: '100%',
      fontSize: '1.4rem',
      py: '1.7rem',
      mb: '2.8rem',
      boxShadow: 'md',
      _hover: {
        bg: 'purple.700'
      }
    },
    btnIcon: {
      fontSize: '3rem',
      rounded: '50%',
      bg: 'gray.200',
      color: 'font',
      _hover: {
        color: 'primary',
        boxShadow: 'base'
      }
    },
    btnTransparent: {
      fontSize: '1.5rem',
      width: '100%',
      color: 'font',
      _hover: {
        color: 'primary'
      }
    },
    btnBack: {
      fontSize: '1.3rem',
      width: '100%',
      position: 'absolute',
      bottom: '0',
      left: '0',
      color: 'font',
      padding: '2rem',
      borderTop: '1px',
      borderColor: 'gray.300',
      _hover: {
        background: 'gray.300'
      }
    },
    defaultProps: {
      variant: 'btnForm'
    }
  }
}
export default Button
