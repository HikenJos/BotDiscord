import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import emailValidation from '../../functions/emailValidation'
import { AlertEmailFail, AlertEmailTrue } from '../alerts/alert'

function InputLogin (): JSX.Element {
  const [loginEmail, setloginEmail] = useState('')
  const [loginPass, setloginPass] = useState('')
  const [alert2, setalert] = useState<JSX.Element>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'loginEmail') {
      if (emailValidation(loginEmail)) {
        const alert = (): JSX.Element => { return <AlertEmailTrue /> }
        setalert(alert)
      } else {
        const alert = (): JSX.Element => { return <AlertEmailFail /> }
        setalert(alert)
      }
      setloginEmail(e.target.value)
    }
    if (e.target.name === 'loginPass') {
      setloginPass(e.target.value)
    }
  }
  return (
    <>
      <Input
        type='email'
        placeholder='Email'
        fontSize='1.4rem'
        textStyle='input'
        focusBorderColor='primary'
        name='loginEmail'
        value={loginEmail}
        onChange={handleChange}
      />
      {alert2}
      <Input
        type='password'
        placeholder='Enter password'
        fontSize='1.4rem'
        textStyle='input'
        focusBorderColor='primary'
        name='loginPass'
        value={loginPass}
        onChange={handleChange}
      />
    </>
  )
}

export default InputLogin
