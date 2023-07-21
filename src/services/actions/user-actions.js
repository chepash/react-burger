import { SET_IS_ERROR_MODAL_OPEN } from './modal-actions'
import * as api from '../../utils/api'
import {
  CLEAR_PROFILE_FORM_STATE,
  UPDATE_PROFILE_FORM_STATE,
} from './profile-actions'

export const GET_USER_DATA_REQUEST = 'GET_USER_DATA_REQUEST'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

export const SET_USER_DATA = 'SET_USER_DATA'
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA'

export const getUser = () => (dispatch) => {
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
    })
    .catch((err) => {
      console.log(`Ошибка fetchUserData: ${err}`)
      return dispatch({ type: GET_USER_DATA_ERROR })
    })
}

export const handleLogOut = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST })

  return api
    .logoutUser()
    .then((res) => {
      // нужно будет отсчистить все данные пользователя здесь из всех стейтов
      // редирект на /
      // и токены удалить
      if (res.success) {
        dispatch({ type: CLEAR_USER_DATA })
        dispatch({ type: CLEAR_PROFILE_FORM_STATE })
      }

      return dispatch({ type: LOGOUT_USER_SUCCESS, payload: res })
    })
    .catch((err) => {
      dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
      console.log(`Ошибка logoutUser: ${err}`)
      return dispatch({ type: LOGOUT_USER_ERROR })
    })
}
