import * as api from '../../utils/api'
import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'

export const UPDATE_REGISTER_FORM_STATE = 'UPDATE_REGISTER_FORM_STATE'
export const CLEAR_REGISTER_FORM_STATE = 'CLEAR_REGISTER_FORM_STATE'

export const REGISTER_FORM_SUBMIT_REQUEST = 'REGISTER_FORM_SUBMIT_REQUEST'
export const REGISTER_FORM_SUBMIT_SUCCESS = 'REGISTER_FORM_SUBMIT_SUCCESS'
export const REGISTER_FORM_SUBMIT_ERROR = 'REGISTER_FORM_SUBMIT_ERROR'

export const registratioFormSubmit =
  (name, email, password, navigate) => (dispatch) => {
    dispatch({ type: REGISTER_FORM_SUBMIT_REQUEST })

    return api
      .registerUser(name, email, password)
      .then((res) => {
        if (res.success) {
          dispatch({ type: CLEAR_REGISTER_FORM_STATE })
          navigate('/', { replace: true })
        }
        return dispatch({ type: REGISTER_FORM_SUBMIT_SUCCESS, payload: res })
      })
      .catch((err) => {
        dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
        console.log(`Ошибка registerUser: ${err}`)
        return dispatch({ type: REGISTER_FORM_SUBMIT_ERROR })
      })
  }
