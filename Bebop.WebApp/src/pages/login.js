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
          <p>Welcome to We Want Doughnuts.</p>
          <p>A demo of using React and Identity Server 4 to authenticate a user via OpenID Connect to gain access to a web API (and some lovely doughnuts).</p>
          <p>Start by signing in.</p>
          <p>💡 <strong>Tip: </strong><em>User: 'alice', Pass: 'alice'</em></p>

          <button onClick={() => login()}>Login</button>
          <p><a target='_blank' rel='noopener noreferrer' href='https://github.com/tappyy/react-IS4-auth-demo'>Github Repo</a></p>
        </div>
      )
  )
}

export default Login
