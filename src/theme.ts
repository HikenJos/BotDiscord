import { extendTheme } from '@chakra-ui/react'
import Button from './theme/button/button'
import Text from './theme/paragrah/text'

const themes = extendTheme({
  components: {
    Button,
    Text
  },
  colors: {
    primary: '#9155FD',
    secondary: '#FFB400',
    font: '#3a3541de',
    grai: '#F4F5FA'
  },
  textStyles: {
    input: {
      mb: '10px',
      p: '2rem',
      color: 'font'
    }
  }
})

export default themes
