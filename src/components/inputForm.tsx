import React from 'react'
import { Input } from '@chakra-ui/react'

function InputForm (): JSX.Element {
  return (
    <>
      <Input
        type='email'
        placeholder='Email'
        fontSize='1.4rem'
        textStyle='input'
        focusBorderColor='primary'
      />
    </>
  )
}

export default InputForm
