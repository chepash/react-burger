import * as api from '../../utils/api'
import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'

export const UPDATE_PWD_RESTORE_FORM_STATE = 'UPDATE_PWD_RESTORE_FORM_STATE'
export const CLEAR_PWD_RESTORE_FORM_STATE = 'CLEAR_PWD_RESTORE_FORM_STATE'
export const CLEAR_PWD_RESTORE_STATE = 'CLEAR_PWD_RESTORE_STATE'

export const PWD_RESTORE_FORM_SUBMIT_REQUEST = 'PWD_RESTORE_FORM_SUBMIT_REQUEST'
export const PWD_RESTORE_FORM_SUBMIT_SUCCESS = 'PWD_RESTORE_FORM_SUBMIT_SUCCESS'
export const PWD_RESTORE_FORM_SUBMIT_ERROR = 'PWD_RESTORE_FORM_SUBMIT_ERROR'

export const passwordRestoreFormSubmit = (email, navigate) => (dispatch) => {
  dispatch({ type: PWD_RESTORE_FORM_SUBMIT_REQUEST })

  return api
    .sendPasswordRecoveryEmail(email)
    .then((res) => {
      if (res.success) {
        dispatch({ type: PWD_RESTORE_FORM_SUBMIT_SUCCESS, payload: res })
        dispatch({ type: CLEAR_PWD_RESTORE_FORM_STATE })
        navigate('/reset-password', { replace: true })
      }
    })
    .catch((err) => {
      dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
      console.log(`Ошибка sendPasswordRecoveryEmail: ${err}`)
      return dispatch({ type: PWD_RESTORE_FORM_SUBMIT_ERROR })
    })
}
