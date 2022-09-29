import emailValidation from '@/functions/emailValidation'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { AlertEmailFail, AlertEmailTrue } from './alerts/alert'

function InputForm (): JSX.Element {
  const [emailRecovery, setEmailRecovery] = useState('')
  const [alert, setAlert] = useState<JSX.Element>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'emailRecovery') {
      if (emailValidation(emailRecovery)) {
        const alert = (): JSX.Element => { return <AlertEmailTrue /> }
        setAlert(alert)
      } else {
        const alert = (): JSX.Element => { return <AlertEmailFail /> }
        setAlert(alert)
      }
      setEmailRecovery(e.target.value)
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
        name='emailRecovery'
        value={emailRecovery}
        onChange={handleChange}
      />
      {alert}
    </>
  )
}

export { InputForm }
