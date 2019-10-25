import { UserManager } from 'oidc-client';
import { storeUser, storeUserError, loadingUser } from '../actions/authActions'

const config = {
  authority: "https://localhost:5001",
  client_id: "spa",
  redirect_uri: "http://localhost:3000/signincallback",
  response_type: "id_token token",
  scope: "openid profile",
  post_logout_redirect_uri: "http://localhost:3000/signoutcallback",
};

const userManager = new UserManager(config)

export function loadUserFromStorage(store) {
  store.dispatch(loadingUser())
  userManager.getUser()
    .then(user => {
      store.dispatch(storeUser(user))
    })
    .catch(error => {
      console.error(`Error getting user: ${error}`)
      store.dispatch(storeUserError())
    })
}

export default userManager