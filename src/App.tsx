import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from '@/components'
import AppRoute from './routes'

function App (): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
