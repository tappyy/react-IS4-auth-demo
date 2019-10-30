import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

function NoMatch() {
  const location = useLocation()
  const history = useHistory()

  function returnHome() {
    history.push('/')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Oops!</h1>
        <p>We didn't find {location.pathname}</p>
        <button onClick={() => returnHome()}>Return</button>
      </header>
    </div>
  )
}

export default NoMatch
