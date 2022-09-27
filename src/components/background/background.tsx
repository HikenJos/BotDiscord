import React from 'react'
import './background.css'
import Login from '../../pages/Login'
import BackgroundCircle from './backgroundCircle'

interface props {
  children: JSX.Element
}

function Background ({ children }: props): JSX.Element {
  return (
    <>
      <div className="background">
        <Login />
        <BackgroundCircle />
      </div>
    </>
  )
}

export default Background
