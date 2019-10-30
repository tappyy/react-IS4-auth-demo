import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

function NoMatch() {
  const location = useLocation()
  const history = useHistory()

  function returnHome() {
    history.push('/')
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>I don't know what "{location.pathname}" is...</p>
      <button onClick={() => returnHome()}>Hurry back</button>
    </div>
  )
}

export default NoMatch
