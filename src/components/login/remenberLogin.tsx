import React from 'react'
import { Flex, Checkbox, Spacer, Link } from '@chakra-ui/react'

function RemenberLogin (): JSX.Element {
  return (
    <>
      <Flex mb='2rem'>
        <Checkbox
          size='lg'
          iconSize='2rem'
          colorScheme='purple'
          color='font'
        >Remember Me</Checkbox>
        <Spacer />
        <Link color='primary'
          fontSize='1.2rem'
          _hover={{ textDecoration: 'none' }}
          href='#'>Forgot Password?</Link>
      </Flex>
    </>
  )
}
export default RemenberLogin
