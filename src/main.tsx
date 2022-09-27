import { ChakraProvider } from '@chakra-ui/react'
import themes from './theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PasswordRecovery from './pages/PasswordRecovery'

function Index (): JSX.Element {
  return (
    <>
      <PasswordRecovery />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <Index />
    </ChakraProvider>
  </React.StrictMode>
)
