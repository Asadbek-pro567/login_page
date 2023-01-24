import React from 'react'
import { Outlet } from 'react-router-dom'
import './Login.scss'

function Login() {
  return (
    <div className='container'>
        <Outlet/>
    </div>
  ) 
}

export default Login