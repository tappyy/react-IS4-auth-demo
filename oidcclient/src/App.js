import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SigninOidc from './pages/signin-oidc'
import SignoutOidc from './pages/signout-oidc'
import Home from './pages/home'
import Login from './pages/login'
import { Provider } from 'react-redux';
import store from './store';
import userManager, { loadUserFromStorage } from './utils/userManager'
import AuthProvider from './utils/authProvider'
import PrivateRoute from './utils/protectedRoute'

function App() {

  useEffect(() => {
    // fetch current user from cookies
    loadUserFromStorage(store)
  }, [])

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin-oidc" component={SigninOidc} />
            <Route exact path="/signout-oidc" component={SignoutOidc} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
