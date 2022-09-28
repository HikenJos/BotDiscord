import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
