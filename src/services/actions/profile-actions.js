import * as api from '../../utils/api'
import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'

export const UPDATE_PROFILE_FORM_STATE = 'UPDATE_PROFILE_FORM_STATE'
export const CLEAR_PROFILE_FORM_STATE = 'CLEAR_PROFILE_FORM_STATE'

export const PROFILE_FORM_SUBMIT_REQUEST = 'PROFILE_FORM_SUBMIT_REQUEST'
export const PROFILE_FORM_SUBMIT_SUCCESS = 'PROFILE_FORM_SUBMIT_SUCCESS'
export const PROFILE_FORM_SUBMIT_ERROR = 'PROFILE_FORM_SUBMIT_ERROR'

export const profileFormSubmit = (name, email, password) => (dispatch) => {
  dispatch({ type: PROFILE_FORM_SUBMIT_REQUEST })
  const updatedfields = { name, email, password }

  return api
    .updateUserData(updatedfields)
    .then((res) => {
      if (res.success) {
        dispatch({ type: CLEAR_PROFILE_FORM_STATE })
      }
      return dispatch({ type: PROFILE_FORM_SUBMIT_SUCCESS, payload: res })
    })
    .catch((err) => {
      dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
      console.log(`Ошибка updateUserData: ${err}`)
      return dispatch({ type: PROFILE_FORM_SUBMIT_ERROR })
    })
}
