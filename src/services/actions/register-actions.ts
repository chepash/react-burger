import { NavigateFunction } from 'react-router-dom'
import * as api from '../../utils/api'
import {
  CLEAR_REGISTER_FORM_STATE,
  CLEAR_REGISTER_STATE,
  REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_REQUEST,
  REGISTER_FORM_SUBMIT_SUCCESS,
  UPDATE_REGISTER_FORM_STATE,
} from '../../utils/constants'
import { AppDispatch, AppThunk } from '../types'
import { TAuthResponse } from '../types/data'
import { setIsErrorModalOpenAction } from './modal-actions'
import { getUserThunk } from './user-actions'

export interface IUpdateRegisterFormStateAction {
  readonly type: typeof UPDATE_REGISTER_FORM_STATE
  readonly payload: {
    field: string
    value: string
  }
}
export interface IClearRegisterFormStateAction {
  readonly type: typeof CLEAR_REGISTER_FORM_STATE
}
export interface IClearRegisterStateAction {
  readonly type: typeof CLEAR_REGISTER_STATE
}
export interface IRegisterFormSubmitRequestAction {
  readonly type: typeof REGISTER_FORM_SUBMIT_REQUEST
}
export interface IRegisterFormSubmitSuccessAction {
  readonly type: typeof REGISTER_FORM_SUBMIT_SUCCESS
  readonly payload: TAuthResponse
}
export interface IRegisterFormSubmitFailedAction {
  readonly type: typeof REGISTER_FORM_SUBMIT_FAILED
}
export type TRegisterActions =
  | IUpdateRegisterFormStateAction
  | IClearRegisterFormStateAction
  | IClearRegisterStateAction
  | IRegisterFormSubmitRequestAction
  | IRegisterFormSubmitSuccessAction
  | IRegisterFormSubmitFailedAction

export const updateRegisterFormStateAction = (
  inputName: string,
  inputValue: string
): IUpdateRegisterFormStateAction => {
  return {
    type: UPDATE_REGISTER_FORM_STATE,
    payload: {
      field: inputName,
      value: inputValue,
    },
  }
}

export const clearRegisterFormStateAction =
  (): IClearRegisterFormStateAction => {
    return {
      type: CLEAR_REGISTER_FORM_STATE,
    }
  }

export const clearRegisterStateAction = (): IClearRegisterStateAction => {
  return {
    type: CLEAR_REGISTER_STATE,
  }
}

export const registerFormSubmitRequestAction =
  (): IRegisterFormSubmitRequestAction => {
    return {
      type: REGISTER_FORM_SUBMIT_REQUEST,
    }
  }

export const registerFormSubmitSuccessAction = (
  registerResponse: TAuthResponse
): IRegisterFormSubmitSuccessAction => {
  return {
    type: REGISTER_FORM_SUBMIT_SUCCESS,
    payload: registerResponse,
  }
}

export const registerFormSubmitFailedAction =
  (): IRegisterFormSubmitFailedAction => {
    return {
      type: REGISTER_FORM_SUBMIT_FAILED,
    }
  }

export const registratioFormSubmitThunk =
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
        if (res.success) {
          const accessTokenWithoutBearer = res.accessToken.replace(
            'Bearer ',
            ''
          )
          localStorage.setItem('accessToken', accessTokenWithoutBearer)
          localStorage.setItem('refreshToken', res.refreshToken)

          dispatch(clearRegisterFormStateAction())
          dispatch(registerFormSubmitSuccessAction(res))
          navigate('/', { replace: true })

          return dispatch(getUserThunk())
        }
      })
      .catch(() => {
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(registerFormSubmitFailedAction())
      })
  }
