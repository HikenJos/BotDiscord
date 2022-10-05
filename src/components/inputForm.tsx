import { Input } from '@chakra-ui/react'
import useInputValidation from '@/hooks/useInput'

function InputForm (): JSX.Element {
  const { value: emailRecovery, alert: alertEmail, handleChange: handleChangeRecovery } = useInputValidation()

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
        onChange={handleChangeRecovery}
      />
      {alertEmail}
    </>
  )
}

export { InputForm }
