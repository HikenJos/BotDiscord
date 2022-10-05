import { AlertEmailFail, AlertEmailTrue, AlertPasswordLengthFail, AlertPasswordLengthGood } from '@/components/alerts/alert'
import emailValidation from '@/functions/emailValidation'
import passwordIsShort from '@/functions/passwordLengthValidation'
import { useState } from 'react'
function useInputValidation (): { value: string, alert: JSX.Element, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void } {
  const [value, setValue] = useState('')
  const [alert, setAlert] = useState<JSX.Element>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'registerEmail') {
      if (emailValidation(value)) {
        const alert2 = (): JSX.Element => { return <AlertEmailTrue /> }
        setAlert(alert2)
      } else {
        const alert2 = (): JSX.Element => { return <AlertEmailFail /> }
        setAlert(alert2)
      }
      setValue(e.target.value)
    }
    if (e.target.name === 'registerPass') {
      if (passwordIsShort(value)) {
        const alert2 = (): JSX.Element => { return <AlertPasswordLengthGood /> }
        setAlert(alert2)
      } else {
        const alert2 = (): JSX.Element => { return <AlertPasswordLengthFail /> }
        setAlert(alert2)
      }
      setValue(e.target.value)
    }
  }
  return { value, alert: alert as JSX.Element, handleChange }
}
export default useInputValidation
