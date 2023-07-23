import {
  CLEAR_USER_STATE,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  SET_IS_LOGGED_IN,
  SET_USER_DATA,
} from '../actions/user-actions'

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isLoggedIn: false,
  response: null,
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        response: null,
        error: true,
        isLoading: false,
      }
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        response: null,
        error: true,
        isLoading: false,
      }
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      }
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case CLEAR_USER_STATE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
