import React, { useEffect } from 'react'
import { signinRedirectCallback } from '../utils/userManager'
import { useHistory } from 'react-router-dom'

function SigninCallback() {
  const history = useHistory()
  useEffect(() => {
    signinRedirectCallback()
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

export default SigninCallback
