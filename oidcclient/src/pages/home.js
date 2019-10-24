import React from 'react'
import userManager from '../utils/userManager'

function Home() {
  const logout = () => {
    userManager.signoutRedirect();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <p>You are authenticated.</p>
        <button onClick={() => logout()}>Logout</button>
      </header>
    </div>
  )
}

export default Home
