import {
  LOGIN,
  LOGOUT,
  STORE_USER
} from '../actions/types'

const initialState = {
  user: null,
  isLoadingUser: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_USER:
      return {
        ...state,
        isLoadingUser: false,
        user: action.payload
      }
    default:
      return state
  }
}