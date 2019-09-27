import React, { useState, Fragment } from 'react';
import axios from 'axios'
import qs from 'qs'

function SecretAuth() {

  const [discoveryDoc, setDiscoveryDoc] = useState(null)
  const [authToken, setAuthToken] = useState(null)
  const [protectedData, setProtectedData] = useState(null)
  const [authStatus, setAuthStatus] = useState(false)

  const GetDiscoveryDocument = async () => {
    let dicoveryDocument = await axios.get('https://localhost:5001/.well-known/openid-configuration')
    setDiscoveryDoc(dicoveryDocument.data)
  }

  const GetToken = async () => {
    if (!discoveryDoc.token_endpoint)
      return

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
    setAuthStatus(true)

    let token = await axios.post(discoveryDoc.token_endpoint, qs.stringify(tokenRequestData), config)
    setAuthToken(token.data)
    setAxiosAuthHeader(token.data.access_token)
  }

  const AccessProtectedRoute = async () => {
    const protectedData = await axios.get('https://localhost:5001/identity')
    if (protectedData.status !== 200) {
    } else {
      setProtectedData(protectedData.data)
    }
  }

  const setAxiosAuthHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
  }

  const printJson = (data) => (
    <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
  )

  const halfScreenFlex = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexBasis: '50%',
    maxWidth: '50%',
  }

  const scrollBox = {
    height: '200px',
    overflow: 'auto'
  }

  const tokenRequestData = {
    client_id: "webappsecret",
    client_secret: "secret",
    scope: "bebopclientapi",
    grant_type: "client_credentials"
  }

  return (
    <Fragment>
      <h2>Shared Secret Auth</h2>
      <p>Client will authenticate with Identity Server based on a shared secret. Client will then use access token to access protected web API.</p>

      <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={halfScreenFlex}>
          <h3>1. Getting Discovery Document</h3>
          <button onClick={() => GetDiscoveryDocument()}>Get Discovery Document</button>
          <p>Discovery document information:</p>
          <div style={scrollBox}>
            {printJson(discoveryDoc)}
          </div>
          <h3>2. Getting Auth Token</h3>
          <button onClick={() => GetToken()}>Get Token</button>
          <p>Token:</p>
          <div style={scrollBox}>
            {printJson(authToken)}
          </div>
        </div>
        <div style={halfScreenFlex}>
          <h3>3. Accessing Protected API <span style={{ color: !authStatus ? 'red' : 'green' }}>({!authStatus ? 'Not authorised' : 'Authorised'})</span></h3>
          <button onClick={() => AccessProtectedRoute()}>Access Protected Route</button>
          <p>Protected Data:</p>
          <div style={scrollBox}>
            {printJson(protectedData)}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SecretAuth;
