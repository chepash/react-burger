import * as api from '../../utils/api'
import { setIsErrorModalOpenAction } from './modal-actions'

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
      dispatch(setIsErrorModalOpenAction(true))
      return dispatch({ type: PWD_RESTORE_FORM_SUBMIT_ERROR })
    })
}
