import { Button, Box, Container, Link } from '@chakra-ui/react'
import { DivisionLine, HeaderLogin, BgCustom, InputForm } from '@/components'
import { Link as Linker } from 'react-router-dom'

function PasswordRecovery (): JSX.Element {
  return (
    <>
      <BgCustom>
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
            <HeaderLogin title='' description='' />

            <InputForm />

            <Button variant="btnForm">SEND VERIFICATION CODE</Button>

            <DivisionLine />

            <Link
              as={Linker}
              to='/register'
              _hover={{ textDecoration: 'none' }}>
              <Button variant="btnTransparent">CREATE NEW ACCOUNT</Button>
            </Link>
            <Link
              as={Linker}
              to='/login'
              _hover={{ textDecoration: 'none' }}>
              <Button variant="btnBack">BACK TO LOGIN</Button>
            </Link>
          </Container>
        </Box>
      </BgCustom>
    </>
  )
}

export default PasswordRecovery
