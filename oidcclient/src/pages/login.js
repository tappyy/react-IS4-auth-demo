import React from 'react'
import { signinRedirect } from '../services/userService'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Login() {
  const user = useSelector(state => state.auth.user)

  function login() {
    signinRedirect()
  }

  return (
    (user) ?
      (<Redirect to={'/'} />)
      :
      (
        <div>
          <h1>Hello!</h1>
          <p>I don't know who you are.</p>
          <button onClick={() => login()}>Login</button>
        </div>
      )
  )
}

export default Login
