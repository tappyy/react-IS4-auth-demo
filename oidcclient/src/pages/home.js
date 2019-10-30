import React from 'react'
import { signoutRedirect } from '../services/userService'
import { useSelector } from 'react-redux'

function Home() {
  const user = useSelector(state => state.auth.user)
  function callApi() {
    console.log('call api')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <p>Ah I remember now! Hello, {user.profile.given_name}.</p>
        <p>I have given you a token to call your favourite web API.</p>

        <button className="button button-outline" onClick={() => callApi()}>Call API</button>
        <button className="button button-clear" onClick={() => signoutRedirect()}>Sign out</button>
      </header>
    </div>
  )
}

export default Home
