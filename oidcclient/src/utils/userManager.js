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

export async function loadUserFromStorage(store) {
  try {
    store.dispatch(loadingUser())
    let user = await userManager.getUser()

    if (!user) { return }

    store.dispatch(storeUser(user))

  } catch (e) {
    console.error(`User not found: ${e}`)
    store.dispatch(storeUserError())
  }
}

export function signinRedirect() {
  return userManager.signinRedirect()
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback()
}

export function signoutRedirect() {
  userManager.clearStaleState()
  //userManager.removeUser()
  return userManager.signoutRedirect()
}

export function signoutRedirectCallback() {
  userManager.clearStaleState()
  //userManager.removeUser()
  return userManager.signoutRedirectCallback()
}

export default userManager