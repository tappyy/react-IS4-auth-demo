import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Callback from './pages/callback'
import Home from './pages/home'
import Login from './pages/login'
import { Provider } from 'react-redux';
import store from './store';
import userManager, { loadUserFromStorage } from './utils/userManager'
import AuthProvider from './utils/authProvider'
import PrivateRoute from './utils/protectedRoute'

function App() {

  // fetch current user from cookies
  loadUserFromStorage(store)

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/callback" component={Callback} />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
