import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const PasswordRecovery = lazy(async () => await import('@/pages/passwordRecovery/PasswordRecovery'))
const Login = lazy(async () => await import('@/pages/login/Login'))
const Home = lazy(async () => await import('@/pages/Home'))
const Register = lazy(async () => await import('@/pages/register/register'))
const NotFound = lazy(async () => await import('@/pages/notFound/notFound'))

function AppRoute (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoute
