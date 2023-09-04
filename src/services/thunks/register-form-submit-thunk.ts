import { NavigateFunction } from 'react-router-dom'
import * as api from '../../utils/api'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'
import {
  clearRegisterFormStateAction,
  registerFormSubmitFailedAction,
  registerFormSubmitRequestAction,
  registerFormSubmitSuccessAction,
} from '../actions/register-actions'
import { AppDispatch, AppThunk } from '../types/store'
import { getUserThunk } from './get-user-thunk'

export const registerFormSubmitThunk =
  (
    name: string,
    email: string,
    password: string,
    navigate: NavigateFunction
  ): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(registerFormSubmitRequestAction())

    return api
      .registerUser(name, email, password)
      .then((res) => {
        const accessTokenWithoutBearer = res.accessToken.replace('Bearer ', '')
        localStorage.setItem('accessToken', accessTokenWithoutBearer)
        localStorage.setItem('refreshToken', res.refreshToken)

        dispatch(clearRegisterFormStateAction())
        dispatch(registerFormSubmitSuccessAction(res))
        navigate('/', { replace: true })

        return dispatch(getUserThunk())
      })
      .catch(() => {
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(registerFormSubmitFailedAction())
      })
  }
