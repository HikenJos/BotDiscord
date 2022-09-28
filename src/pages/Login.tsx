import React from 'react'
import { Button, Box, Container } from '@chakra-ui/react'
import DivisionLine from '../components/login/divisionLine'
import HeaderLogin from '../components/login/headerLogin'
import IconFooter from '../components/login/iconFooter'
import InputLogin from '../components/login/inputLogin'
import RemenberLogin from '../components/login/remenberLogin'
import SignLogin from '../components/login/signLogin'

function Login (): JSX.Element {
  return (
    <>
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
    </>
  )
}

export default Login
