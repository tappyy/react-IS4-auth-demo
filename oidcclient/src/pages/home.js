import React from 'react'
import { signoutRedirect } from '../utils/userManager'

function Home() {
  const signout = () => {
    signoutRedirect();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <p>You are authenticated.</p>
        <button onClick={() => signout()}>Sign out</button>
      </header>
    </div>
  )
}

export default Home
