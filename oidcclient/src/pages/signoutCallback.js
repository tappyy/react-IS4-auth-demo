import React, { useEffect } from 'react'
import userManager from '../utils/userManager'
import { useHistory } from 'react-router-dom'

function SignoutCallback() {
  const history = useHistory()
  useEffect(() => {
    userManager.signoutRedirectCallback()
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

export default SignoutCallback
