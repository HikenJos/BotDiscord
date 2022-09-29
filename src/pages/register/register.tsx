import { BgCustom, DivisionLine, HeaderLogin, IconFooter, RemenberLogin, SignLogin } from '@/components'
import { Button, Box, Container, Input } from '@chakra-ui/react'

function Register (): JSX.Element {
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

            <HeaderLogin title='Adventure starts here 🚀'
              description='Make your app management easy and fun!'/>

            <Input
              type='text'
              placeholder='Username'
              fontSize='1.4rem'
              textStyle='input'
              focusBorderColor='primary'
              name='loginEmail'
            />
            <Input
              type='email'
              placeholder='Email'
              fontSize='1.4rem'
              textStyle='input'
              focusBorderColor='primary'
              name='loginEmail'
            />
            <Input
              type='password'
              placeholder='Password'
              fontSize='1.4rem'
              textStyle='input'
              focusBorderColor='primary'
              name='loginPass'
            />

            <RemenberLogin textCheck='I agree to' linkCheck='privacy policy & terms' linkForgot='none' />

            <Button variant='btnForm'>SIGN UP</Button>

            <SignLogin />

            <DivisionLine />

            <IconFooter />

          </Container>
        </Box>
      </BgCustom>
    </>
  )
}
export default Register
