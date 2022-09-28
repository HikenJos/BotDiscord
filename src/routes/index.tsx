import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const PasswordRecovery = lazy(async () => await import('@/pages/passwordRecovery/PasswordRecovery'))
const Login = lazy(async () => await import('@/pages/login/Login'))
const Home = lazy(async () => await import('@/pages/Home'))

function AppRoute (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
      </Routes>
    </>
  )
}

export default AppRoute
