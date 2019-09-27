import React, { useEffect } from 'react'
import { UserManager } from 'oidc-client';

function Callback() {
  useEffect(() => {
    new UserManager().signinRedirectCallback().then((result) => {
      console.log('authenticated via oidc!!!!!!!!')
      console.log(result)
      window.location = 'http://localhost:3000'
    });
  }, [])
  return (
    <div>

    </div>
  )
}

export default Callback
