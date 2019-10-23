import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Callback from './pages/callback'
import Protected from './pages/protected'
import Login from './pages/login'
import { Provider } from 'react-redux';
import store from './store';
import userManager from './utils/userManager'
import AuthProvider from './utils/authProvider'

function App() {

  const login = () => {
    userManager.signinRedirect();
  }

  // const callAPI = () => {
  //   userManager.getUser().then(user => {
  //     setResults(user)
  //   })
  // }

  // const printJSON = (value) => {
  //   return JSON.stringify(value, null, 2);
  // }

  // const logout = () => {
  //   userManager.signoutRedirect()
  // }

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <Router>
          {/* <div className="App">
            <header className="App-header">
              <p>Welcome to OIDC React </p>
              <button onClick={() => login()}>Login</button>



            </header>
          </div> */}
          <Route path="/login/" component={Login} />
          <Route path="/callback/" component={Callback} />
          <Route path="/protected/" component={Protected} />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
