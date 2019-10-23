import React, { useEffect } from 'react'
import userManager from './utils/userManager'
import { useHistory } from 'react-router-dom'

function Callback() {
  const history = useHistory()
  useEffect(() => {
    userManager.signinRedirectCallback()
      .then(() => {
        history.push('/')
      });
  }, [history])
  return (
    <div>
      Redirecting...
    </div>
  )
}

export default Callback
