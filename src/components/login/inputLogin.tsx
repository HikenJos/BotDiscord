import { useState } from 'react'
import { Input } from '@chakra-ui/react'
import useInputValidation from '@/hooks/useInput'

function InputLogin (): JSX.Element {
  const { value: loginEmail, alert: alertEmail, handleChange: HandleChangeEmail } = useInputValidation()
  const [loginPass, setloginPass] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
        onChange={HandleChangeEmail}
      />
      {alertEmail}
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

export { InputLogin }
