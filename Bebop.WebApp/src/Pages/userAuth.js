import React, {useState, Fragment} from 'react';
import axios from 'axios'
import qs from 'qs'

function UserAuth (){
  
  const [discoveryDoc, setDiscoveryDoc] = useState(null)
  const [authToken, setAuthToken] = useState(null)
  const [protectedData, setProtectedData] = useState(null)
  const [authStatus, setAuthStatus] = useState(false)
  const [authError, setAuthError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

    
  const GetDiscoveryDocument = async () => {
    let dicoveryDocument = await axios.get('http://localhost:5000/.well-known/openid-configuration')
    setDiscoveryDoc(dicoveryDocument.data)
  }

  const Login = async (e) => {
    e.preventDefault();

    if(!discoveryDoc) 
      return
  
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
    
    try {
      let token = await axios.post(discoveryDoc.token_endpoint, qs.stringify(tokenRequestData), config)
      setAuthToken(token.data)
      setAxiosAuthHeader(token.data.access_token)
      setAuthStatus(true)
      setAuthError('')
    }catch(e) {
      setAuthError('Incorrect credentials')
      setAuthToken(null)
      setProtectedData(null)
    }
  }

  const AccessProtectedRoute = async () => {
    const protectedData = await axios.get('http://localhost:5001/identity')
    if(protectedData.status !== 200) {
    } else {
      setProtectedData(protectedData.data)
    }
  }

  const setAxiosAuthHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null 
  }

  const printJson = (data) => (
    <div><pre>{JSON.stringify(data, null,2)}</pre></div>
  )

  const halfScreenFlex = {
    display: 'flex', 
    flexDirection: 'column',
    flexGrow:1, 
    flexBasis: '50%',
    maxWidth: '50%',
  }

  const scrollBox = {
    height: '300px',
    overflow: 'auto'
  }

  const tokenRequestData = {
    client_id: "usernamepassword",
    client_secret: "secret",
    scope: "bebopclientapi",
    grant_type: "password",
    username: username,
    password: password
  }

  return (
    <Fragment>
      <h2>Username Password Auth</h2>
      <p>Client will authenticate a user with Identity Server based on username and password credentials. Client will then use access token to access protected web API.</p>
      <p><strong>Note: The OAuth 2.0 spec recommends against using this method (except for legacy apps that cannot host a browser) in favour of the interactive OpenID Connect flow.</strong></p>
      <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
      <div style={halfScreenFlex}>
        <h3>1. Getting Discovery Document</h3>
        <button onClick={() => GetDiscoveryDocument()}>Get Discovery Document</button>
        <p>Discovery document information:</p>
        <div style={scrollBox}>
        {printJson(discoveryDoc)}
        </div>
        <h3>2. Authenticate User</h3>
        <form onSubmit={(e) => Login(e)}>
        <input value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder='username' required />
        <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='password' required />
        <button type='submit'>Login</button>
        </form>
        <p style={{color:'red'}}>{authError}</p>
        <p>Token:</p>
        <div style={scrollBox}>
        {printJson(authToken)}
        </div>
      </div>
      <div style={halfScreenFlex}>
                <h3>3. Accessing Protected API <span style={{color: !authStatus ? 'red' : 'green'}}>({!authStatus ? 'Not authorised' : 'Authorised'})</span></h3>
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

export default UserAuth;
