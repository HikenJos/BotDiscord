import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

function AlertEmailFail (): JSX.Element {
  return (
    <Alert status='error' mb={5}>
      <AlertIcon />
      <AlertTitle>Your Email is not valided!</AlertTitle>
    </Alert>
  )
}

function AlertEmailTrue (): JSX.Element {
  return (
    <Alert status='success' mb={5}>
      <AlertIcon />
      <AlertTitle>Your Email looks good!</AlertTitle>
    </Alert>
  )
}

function AlertPasswordFail (): JSX.Element {
  return (
    <Alert status='error' mb={5}>
      <AlertIcon />
      <AlertTitle>Your Password is Incorrect</AlertTitle>
    </Alert>
  )
}

function AlertPasswordLengthFail (): JSX.Element {
  return (
    <Alert status='error' mb={5}>
      <AlertIcon />
      <AlertTitle>Your pass must have at least 6 characters</AlertTitle>
    </Alert>
  )
}

function AlertPasswordLengthGood (): JSX.Element {
  return (
    <Alert status='success' mb={5}>
      <AlertIcon />
      <AlertTitle>Your password looks good!</AlertTitle>
    </Alert>
  )
}

export { AlertEmailFail, AlertEmailTrue, AlertPasswordFail, AlertPasswordLengthFail, AlertPasswordLengthGood }
