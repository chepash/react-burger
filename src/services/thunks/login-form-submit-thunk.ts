import * as api from '../../utils/api'
import {
  clearLoginFormStateAction,
  loginFormSubmitFailedAction,
  loginFormSubmitRequestAction,
  loginFormSubmitSuccessAction,
} from '../actions/login-actions'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'
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
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(loginFormSubmitFailedAction())
      })
  }
