import React from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
    const location=useLocation();
  return (
    <div>
        <h1>Login</h1>
        <h2>{location.state.name}</h2>
        <h2>{location.state.Age}</h2>
    </div>
  )
}

export default Login