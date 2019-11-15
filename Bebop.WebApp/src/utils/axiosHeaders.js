import axios from 'axios'

export function setAuthHeader(token) {
  axios.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : ''
}