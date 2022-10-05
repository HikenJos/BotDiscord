import { Box, keyframes, Icon } from '@chakra-ui/react'
import { BgCustom } from '../customBackground'
import { SiProbot } from 'react-icons/si'
const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(-5deg); border-radius: 20%; }
  50% { transform: scale(2) rotate(365deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`

const animation = `${animationKeyframes} 2s ease-in-out infinite`

function Loader (): JSX.Element {
  return (
    <>
      <BgCustom>
        <Box
          w='100vw'
          h='100vh'
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex='3'
          position='absolute'
        >
          <Icon as={SiProbot}
            animation={animation}
            fontSize='10rem'
            color='whiteAlpha.800'
          />
        </Box>
      </BgCustom>
    </>
  )
}
export { Loader }
