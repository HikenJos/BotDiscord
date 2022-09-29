import { Image, Box, Container, Heading } from '@chakra-ui/react'
import { BgCustom } from '@/components'
import ImageNotFound from '@/assets/notFound.svg'

function NotFound (): JSX.Element {
  return (
    <>
      <BgCustom>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          w='100vw'
          h='100vh'
          zIndex='3'
          >
          <Container
            maxW='8xl'
            borderRadius='lg'
            p='4.8rem 3.6rem 2.8rem'
            boxShadow='xl'
            zIndex='4'
            bg='whiteAlpha.100'
            position='relative'>
            <Heading as='h1'
              size='3xl'
              color='gray.100'
              fontWeight='600'
              textAlign='center'
              position='absolute'
              right='4rem'
              top='8.5rem'
              lineHeight='4rem'
              textShadow='dark-lg'>Nada por aquí, nada por allá <br></br>
              Y si nos vamos al Home?</Heading>
            <Image src={ImageNotFound}></Image>
          </Container>
        </Box>
      </BgCustom>
    </>
  )
}

export default NotFound
