import * as api from '../../utils/api'
import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'
import { getUser } from './user-actions'

export const UPDATE_PROFILE_FORM_STATE = 'UPDATE_PROFILE_FORM_STATE'
export const CLEAR_PROFILE_FORM_STATE = 'CLEAR_PROFILE_FORM_STATE'
export const CLEAR_PROFILE_STATE = 'CLEAR_PROFILE_STATE'

export const PROFILE_FORM_SUBMIT_REQUEST = 'PROFILE_FORM_SUBMIT_REQUEST'
export const PROFILE_FORM_SUBMIT_SUCCESS = 'PROFILE_FORM_SUBMIT_SUCCESS'
export const PROFILE_FORM_SUBMIT_ERROR = 'PROFILE_FORM_SUBMIT_ERROR'

export const SET_CHANGED_INPUTS = 'SET_CHANGED_INPUTS'
export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY'

export const profileFormSubmit =
  (changedInputs, userName, userEmail) => (dispatch) => {
    dispatch({ type: PROFILE_FORM_SUBMIT_REQUEST })

    Object.keys(changedInputs).forEach((field) => {
      if (
        (field === 'name' && changedInputs[field] === userName) ||
        (field === 'email' && changedInputs[field] === userEmail) ||
        (field === 'password' && changedInputs[field] === '')
      ) {
        delete changedInputs[field]
      }
    })

    return api
      .updateUserData(changedInputs)
      .then((res) => {
        dispatch({ type: PROFILE_FORM_SUBMIT_SUCCESS, payload: res })
        dispatch({
          type: UPDATE_PROFILE_FORM_STATE,
          payload: {
            field: 'password',
            value: '',
          },
        })
        dispatch(getUser())
      })
      .catch((err) => {
        dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
        console.log(`Ошибка updateUserData: ${err}`)
        return dispatch({ type: PROFILE_FORM_SUBMIT_ERROR })
      })
  }