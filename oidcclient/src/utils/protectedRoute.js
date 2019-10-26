import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute({ children, ...rest }) {
  const user = useSelector(state => state.auth.user)
  console.log(user)
  return (
    <Route
      {...rest}
      render={() =>
        user ?
          (children)
          :
          (<Redirect to={'/login'} />)
      }
    />
  );
}

export default ProtectedRoute