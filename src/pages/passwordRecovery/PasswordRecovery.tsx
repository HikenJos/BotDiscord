import { Button, Box, Container, Input } from '@chakra-ui/react'
import { DivisionLine, HeaderLogin, BgCustom } from '@/components'

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
            <HeaderLogin />

            <Input
              type='email'
              placeholder='Email'
              fontSize='1.4rem'
              textStyle='input'
              focusBorderColor='primary'
            />

            <Button variant="btnForm">SEND VERIFICATION CODE</Button>

            <DivisionLine />

            <Button variant="btnTransparent">CREATE NEW ACCOUNT</Button>

            <Button variant="btnBack">BACK TO LOGIN</Button>
          </Container>
        </Box>
      </BgCustom>
    </>
  )
}

export default PasswordRecovery
