import * as api from '../../utils/api'
import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'
import { getUser } from './user-actions'

export const SET_REDIRECT_PATH = 'SET_REDIRECT_PATH'
export const UPDATE_LOGIN_FORM_STATE = 'UPDATE_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_FORM_STATE = 'CLEAR_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_STATE = 'CLEAR_LOGIN_STATE'

export const LOGIN_FORM_SUBMIT_REQUEST = 'LOGIN_FORM_SUBMIT_REQUEST'
export const LOGIN_FORM_SUBMIT_SUCCESS = 'LOGIN_FORM_SUBMIT_SUCCESS'
export const LOGIN_FORM_SUBMIT_ERROR = 'LOGIN_FORM_SUBMIT_ERROR'

export const loginFormSubmit = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_FORM_SUBMIT_REQUEST })

  return api
    .loginUser(email, password)
    .then((res) => {
      const accessTokenWithoutBearer = res.accessToken.replace('Bearer ', '')
      localStorage.setItem('accessToken', accessTokenWithoutBearer)
      localStorage.setItem('refreshToken', res.refreshToken)

      dispatch({ type: CLEAR_LOGIN_FORM_STATE })
      dispatch({ type: LOGIN_FORM_SUBMIT_SUCCESS, payload: res })
      return dispatch(getUser())
    })
    .catch(() => {
      dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
      return dispatch({ type: LOGIN_FORM_SUBMIT_ERROR })
    })
}
