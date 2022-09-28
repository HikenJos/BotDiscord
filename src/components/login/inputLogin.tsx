import { Input } from '@chakra-ui/react'

export function InputLogin (): JSX.Element {
  return (
    <>
      <Input
        type='email'
        placeholder='Email'
        fontSize='1.4rem'
        textStyle='input'
        focusBorderColor='primary'
      />
      <Input
        type='password'
        placeholder='Enter password'
        fontSize='1.4rem'
        textStyle='input'
        focusBorderColor='primary'
      />
    </>
  )
}

export default InputLogin
