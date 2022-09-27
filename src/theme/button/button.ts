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
    defaultProps: {
      variant: 'btnForm'
    }
  }
}
export default Button
