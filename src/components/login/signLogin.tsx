import { Text, Link } from '@chakra-ui/react'
import { InsteadLogin } from '@/@types/types'
import { Link as Linker } from 'react-router-dom'
function SignLogin ({ linkSign }: InsteadLogin): JSX.Element {
  return (
    <>
      <Text
        fontSize='1.4rem'
        color='font'
        textAlign='center'
        variant='inputForm'
      >Already have an account?
        <Link
          as={Linker}
          color='primary'
          fontWeight='500'
          _hover={{ textDecoration: 'none' }}
          to={linkSign}> Sign in instead</Link></Text>
    </>
  )
}

export { SignLogin }
