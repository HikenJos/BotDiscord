import React from 'react'
import { Button, Box, Container } from '@chakra-ui/react'
import DivisionLine from '../components/divisionLine'
import HeaderLogin from '../components/textForm'
import InputLogin from '../components/inputForm'

function Login (): JSX.Element {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100vw"
        h="100vh"
        zIndex="3"
      >
        <Container
          maxW="2xl"
          borderRadius="lg"
          p="4.8rem 3.6rem 6.8rem"
          boxShadow="xl"
          zIndex="4"
          bg="gray.100"
          position="relative"
        >
          <HeaderLogin />

          <InputLogin />

          <Button variant="btnForm">SEND VERIFICATION CODE</Button>

          <DivisionLine />

          <Button variant="btnTransparent">CREATE NEW ACCOUNT</Button>

          <Button variant="btnBack">BACK TO LOGIN</Button>
        </Container>
      </Box>
    </>
  )
}

export default Login
