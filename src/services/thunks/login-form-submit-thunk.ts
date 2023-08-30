import * as api from '../../utils/api'
import {
  clearLoginFormStateAction,
  loginFormSubmitFailedAction,
  loginFormSubmitRequestAction,
  loginFormSubmitSuccessAction,
} from '../actions/login-actions'
import { SET_IS_ERROR_MODAL_OPEN } from '../types/action-types'
import { AppDispatch, AppThunk } from '../types/store'
import { getUserThunk } from './get-user-thunk'

export const loginFormSubmitThunk =
  (email: string, password: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(loginFormSubmitRequestAction())

    return api
      .loginUser(email, password)
      .then((res) => {
        const accessTokenWithoutBearer = res.accessToken.replace('Bearer ', '')
        localStorage.setItem('accessToken', accessTokenWithoutBearer)
        localStorage.setItem('refreshToken', res.refreshToken)

        dispatch(clearLoginFormStateAction())
        dispatch(loginFormSubmitSuccessAction(res))
        return dispatch(getUserThunk())
      })
      .catch(() => {
        dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
        return dispatch(loginFormSubmitFailedAction())
      })
  }
