import {
  LOGIN,
  LOGOUT,
  STORE_USER
} from './types'

export function login() {
  return {
    type: LOGIN
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function storeUser(user) {
  return {
    type: STORE_USER,
    payload: user
  }
}



