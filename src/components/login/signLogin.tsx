import { Text, Link } from '@chakra-ui/react'

function SignLogin (): JSX.Element {
  return (
    <>
      <Text
        fontSize='1.4rem'
        color='font'
        textAlign='center'
        variant='inputForm'
      >Already have an account?
        <Link
          color='primary'
          fontWeight='500'
          _hover={{ textDecoration: 'none' }}
          href='/register'> Sign in instead</Link></Text>
    </>
  )
}

export { SignLogin }
