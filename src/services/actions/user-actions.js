import * as api from '../../utils/api'
import { clearLoginStateAction } from './login-actions'
import { setIsErrorModalOpenAction } from './modal-actions'
import { clearOrderStateAction } from './order-actions'
import { CLEAR_PWD_RESET_STATE } from './password-reset-actions'
import { CLEAR_PWD_RESTORE_STATE } from './password-restore-actions'
import {
  CLEAR_PROFILE_STATE,
  UPDATE_PROFILE_FORM_STATE,
} from './profile-actions'
import { CLEAR_REGISTER_STATE } from './register-actions'

export const GET_USER_DATA_REQUEST = 'GET_USER_DATA_REQUEST'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'
export const CLEAR_USER_STATE = 'CLEAR_USER_STATE'

export const getUser = () => (dispatch) => {
  const accessToken = localStorage.getItem('accessToken')

  if (accessToken) {
    dispatch({ type: GET_USER_DATA_REQUEST })

    return api
      .fetchUserData()
      .then((res) => {
        dispatch({ type: SET_USER_DATA, payload: res.user })
        dispatch({ type: GET_USER_DATA_SUCCESS, payload: res })
        dispatch({
          type: UPDATE_PROFILE_FORM_STATE,
          payload: {
            field: 'name',
            value: res.user.name,
          },
        })
        dispatch({
          type: UPDATE_PROFILE_FORM_STATE,
          payload: {
            field: 'email',
            value: res.user.email,
          },
        })
        dispatch({ type: SET_IS_LOGGED_IN, payload: true })
      })
      .catch(() => {
        dispatch({ type: SET_IS_LOGGED_IN, payload: false })
        return dispatch({ type: GET_USER_DATA_ERROR })
      })
  }
}

export const handleLogOut = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST })

  return api
    .logoutUser()
    .then((res) => {
      if (res.success) {
        localStorage.clear()

        dispatch(clearLoginStateAction())
        dispatch(clearOrderStateAction())
        dispatch({ type: CLEAR_REGISTER_STATE })
        dispatch({ type: CLEAR_PWD_RESTORE_STATE })
        dispatch({ type: CLEAR_PWD_RESET_STATE })
        dispatch({ type: CLEAR_PROFILE_STATE })
        dispatch({ type: CLEAR_USER_STATE })
      }

      return dispatch({ type: LOGOUT_USER_SUCCESS, payload: res })
    })
    .catch(() => {
      dispatch(setIsErrorModalOpenAction(true))
      return dispatch({ type: LOGOUT_USER_ERROR })
    })
}
