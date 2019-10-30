import React from 'react'
import { signinRedirect } from '../utils/userManager'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Login() {
  const user = useSelector(state => state.auth.user)

  const login = () => {
    signinRedirect()
  }

  return (
    (user) ?
      (<Redirect to={'/'} />)
      :
      (
        <div className="App">
          <header className="App-header">
            <h1>Hello!</h1>
            <p>Welcome to Andy's OIDC React Playground</p>
            <button onClick={() => login()}>Login</button>
          </header>
        </div>
      )
  )
}

export default Login
