import React, { useState } from 'react';
import './App.css';
import { UserManager } from 'oidc-client';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Callback from './callback'
import Protected from './protected'

function App() {
  const [results, setResults] = useState(null)

  const config = {
    authority: "https://localhost:5001",
    client_id: "spa",
    redirect_uri: "http://localhost:3000/callback",
    response_type: "id_token token",
    scope: "openid profile",
    post_logout_redirect_uri: "http://localhost:3000",
  };

  const userManager = new UserManager(config);

  const login = () => {
    userManager.signinRedirect();
  }

  const callAPI = () => {
    userManager.getUser().then(user => {
      setResults(user)
    })
  }

  const printJSON = (value) => {
    return JSON.stringify(value, null, 2);
  }

  const logout = () => {
    userManager.signoutRedirect()
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <button onClick={() => login()}>Login</button>
          <button onClick={() => callAPI()}>Call API</button>
          <button onClick={() => logout()}>Logout</button>

          <pre>{printJSON(results)}</pre>
        </header>
      </div>

      <Route path="/callback/" component={Callback} />
      <Route path="/protected/" component={Protected} />
    </Router>
  );
}

export default App;
