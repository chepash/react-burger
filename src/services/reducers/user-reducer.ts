import {
  CLEAR_USER_STATE,
  GET_USER_DATA_FAILED,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  SET_IS_LOGGED_IN,
  SET_USER_DATA,
} from '../../utils/constants'
import { TLogoutResponse, TUser, TUserDataResponse } from '../types/data'
import { TUserActions } from '../actions/user-actions'

type TUserState = {
  user: TUser
  isLoggedIn: boolean

  getUserResponse: TUserDataResponse | null
  isGetUserDataError: boolean | null

  logoutResponse: TLogoutResponse | null
  isLogoutError: boolean | null

  isLoading: boolean
}

const initialState: TUserState = {
  user: {
    name: '',
    email: '',
  },
  isLoggedIn: false,

  getUserResponse: null,
  isGetUserDataError: null,

  logoutResponse: null,
  isLogoutError: null,

  isLoading: false,
}

export const userReducer = (state = initialState, action: TUserActions) => {
  switch (action.type) {
    case GET_USER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        getUserResponse: action.payload,
        isLoading: false,
      }
    case GET_USER_DATA_FAILED:
      return {
        ...state,
        getUserResponse: null,
        isGetUserDataError: true,
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
        logoutResponse: action.payload,
        isLoading: false,
      }
    case LOGOUT_USER_FAILED:
      return {
        ...state,
        response: null,
        isLogoutError: true,
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
      const exhaustiveCheck: never = action
      return state
  }
}
