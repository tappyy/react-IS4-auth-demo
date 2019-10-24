import {
  USER_SIGNED_OUT,
  STORE_USER_ERROR,
  USER_EXPIRED,
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
    case USER_EXPIRED:
    case STORE_USER_ERROR:
    case USER_SIGNED_OUT:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}