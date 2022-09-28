import { Button, Box, Container } from '@chakra-ui/react'
import { BgCustom, DivisionLine, HeaderLogin, IconFooter, InputLogin, RemenberLogin, SignLogin } from '@/components'

function Login (): JSX.Element {
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
            maxW='2xl'
            borderRadius='lg'
            p='4.8rem 3.6rem 2.8rem'
            boxShadow='xl'
            zIndex='4'
            bg='gray.100'>

            <HeaderLogin />

            <InputLogin />

            <RemenberLogin />

            <Button variant='btnForm'>LOGIN</Button>

            <SignLogin />

            <DivisionLine />

            <IconFooter/>

          </Container>
        </Box>

      </BgCustom>
    </>
  )
}

export default Login
