import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute({ children, ...rest }) {
  const user = useSelector(state => state.auth.user)
  return (
    <Route
      {...rest}
      render={() =>
        !user || user.expired ?
          <Redirect to={'/login'} />
          :
          (children)
      }
    />
  );
}