import * as api from '../../utils/api'
import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'
import { getUser } from './user-actions'

export const UPDATE_LOGIN_FORM_STATE = 'UPDATE_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_FORM_STATE = 'CLEAR_LOGIN_FORM_STATE'

export const LOGIN_FORM_SUBMIT_REQUEST = 'LOGIN_FORM_SUBMIT_REQUEST'
export const LOGIN_FORM_SUBMIT_SUCCESS = 'LOGIN_FORM_SUBMIT_SUCCESS'
export const LOGIN_FORM_SUBMIT_ERROR = 'LOGIN_FORM_SUBMIT_ERROR'

export const loginFormSubmit = (email, password, navigate) => (dispatch) => {
  dispatch({ type: LOGIN_FORM_SUBMIT_REQUEST })

  return api
    .loginUser(email, password)
    .then((res) => {
      const accessTokenWithoutBearer = res.accessToken.replace('Bearer ', '')
      localStorage.setItem('accessToken', accessTokenWithoutBearer)
      localStorage.setItem('refreshToken', res.refreshToken)

      dispatch(getUser())

      dispatch({ type: CLEAR_LOGIN_FORM_STATE })
      // navigate(-1, { replace: true })

      return dispatch({ type: LOGIN_FORM_SUBMIT_SUCCESS, payload: res })
    })
    .catch((err) => {
      dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
      console.log(`Ошибка loginUser: ${err}`)
      return dispatch({ type: LOGIN_FORM_SUBMIT_ERROR })
    })
}
