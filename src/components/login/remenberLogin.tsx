import { Flex, Checkbox, Spacer, Link } from '@chakra-ui/react'
import { Remenber } from '@/@types/types'

function RemenberLogin ({ textCheck, linkCheck, linkForgot }: Remenber): JSX.Element {
  return (
    <>
      <Flex mb='2rem'>
        <Checkbox
          size='lg'
          iconSize='2rem'
          colorScheme='purple'
          color='font'
        >{textCheck} <Link
            color='primary'
            fontSize='1.2rem'
            _hover={{ textDecoration: 'none' }}
            href='/'>{linkCheck}</Link></Checkbox>
        <Spacer />
        <Link color='primary'
          fontSize='1.2rem'
          _hover={{ textDecoration: 'none' }}
          href='/password-recovery'
          display={linkForgot}>Forgot Password?</Link>
      </Flex>
    </>
  )
}
export { RemenberLogin }
