import * as api from '../../utils/api'
import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'
import { CLEAR_PWD_RESTORE_STATE } from './password-restore-actions'

export const UPDATE_PWD_RESET_FORM_STATE = 'UPDATE_PWD_RESET_FORM_STATE'
export const CLEAR_PWD_RESET_FORM_STATE = 'CLEAR_PWD_RESET_FORM_STATE'
export const CLEAR_PWD_RESET_STATE = 'CLEAR_PWD_RESET_STATE'

export const PWD_RESET_FORM_SUBMIT_REQUEST = 'PWD_RESET_FORM_SUBMIT_REQUEST'
export const PWD_RESET_FORM_SUBMIT_SUCCESS = 'PWD_RESET_FORM_SUBMIT_SUCCESS'
export const PWD_RESET_FORM_SUBMIT_ERROR = 'PWD_RESET_FORM_SUBMIT_ERROR'

export const passwordResetFormSubmit =
  ({ token, password }, navigate) =>
  (dispatch) => {
    dispatch({ type: PWD_RESET_FORM_SUBMIT_REQUEST })

    return api
      .sendPasswordResetRequest({ token, password })
      .then((res) => {
        if (res.success) {
          dispatch({ type: CLEAR_PWD_RESET_FORM_STATE })
          dispatch({ type: CLEAR_PWD_RESTORE_STATE })
          navigate('/', { replace: true })
        }
        return dispatch({ type: PWD_RESET_FORM_SUBMIT_SUCCESS, payload: res })
      })
      .catch((err) => {
        dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
        return dispatch({ type: PWD_RESET_FORM_SUBMIT_ERROR })
      })
  }
