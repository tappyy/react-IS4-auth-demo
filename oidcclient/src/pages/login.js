import React from 'react'
import userManager from '../utils/userManager'

function Login() {

  const login = () => {
    userManager.signinRedirect();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <p>Welcome to OIDC React</p>
        <button onClick={() => login()}>Login</button>
      </header>
    </div>
  )
}

export default Login
