import { Box } from '@chakra-ui/react'
import { Background } from '@/components'
import { TypeComponent } from '@/@types/types'

const BgCustom = ({ children }: TypeComponent): JSX.Element => {
  return (
    <>
      <Box position='relative' w='100vw' height='100vh'>
        <Background>
          {children}
        </Background>
      </Box>
    </>
  )
}

export { BgCustom }
