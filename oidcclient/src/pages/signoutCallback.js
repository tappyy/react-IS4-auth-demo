import React, { useEffect } from 'react'
import { signoutRedirectCallback } from '../utils/userManager'
import { useHistory } from 'react-router-dom'

function SignoutCallback() {
  const history = useHistory()
  useEffect(() => {
    signoutRedirectCallback()
      .then(() => {
        history.push('/login')
      });
  }, [history])
  return (
    <div>
      Redirecting...
    </div>
  )
}

export default SignoutCallback
