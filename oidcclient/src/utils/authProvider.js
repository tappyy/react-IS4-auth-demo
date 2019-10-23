import React, { useEffect, useRef } from 'react';
import { storeUser } from '../actions/authActions'


export default function AuthProvider({ userManager: manager, store, children }) {

  let userManager = useRef();

  useEffect(() => {
    userManager.current = manager

    const onUserLoaded = (user) => {
      console.log(user)
      store.dispatch(storeUser(user))
    }

    // events for user
    userManager.current.events.addUserLoaded(onUserLoaded)

    // Specify how to clean up after this effect:
    return function cleanup() {
      userManager.current.events.removeUserLoaded(onUserLoaded);
    };
  }, [manager, store]);

  // callbacks for events


  return (
    React.Children.only(children)
  )
}