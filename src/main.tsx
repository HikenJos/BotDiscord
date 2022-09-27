import { ChakraProvider } from '@chakra-ui/react'
import themes from './theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import Login from './components/login/Login'
import './index.css'
import Background from './components/background/background'

function Index (): JSX.Element {
  return (
  /*     <App /> */
  /*    <Login /> */
  <>
  <Background>
    <h1>1</h1>
  </Background>
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
