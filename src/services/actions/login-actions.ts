import * as api from '../../utils/api'
import {
  CLEAR_LOGIN_FORM_STATE,
  CLEAR_LOGIN_STATE,
  LOGIN_FORM_SUBMIT_FAILED,
  LOGIN_FORM_SUBMIT_REQUEST,
  LOGIN_FORM_SUBMIT_SUCCESS,
  SET_IS_ERROR_MODAL_OPEN,
  UPDATE_LOGIN_FORM_STATE,
} from '../../utils/constants'
import { TAuthResponse } from '../../utils/types'
import { getUserThunk } from './user-actions'

export interface IUpdateLoginFormStateAction {
  readonly type: typeof UPDATE_LOGIN_FORM_STATE
  readonly payload: {
    field: string
    value: string
  }
}
export interface IClearLoginFormStateAction {
  readonly type: typeof CLEAR_LOGIN_FORM_STATE
}
export interface IClearLoginStateAction {
  readonly type: typeof CLEAR_LOGIN_STATE
}
export interface ILoginFormSubmitRequestAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_REQUEST
}
export interface ILoginFormSubmitSuccessAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_SUCCESS
  readonly payload: TAuthResponse
}
export interface ILoginFormSubmitFailedAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_FAILED
}
export type TLoginActions =
  | IUpdateLoginFormStateAction
  | IClearLoginFormStateAction
  | IClearLoginStateAction
  | ILoginFormSubmitRequestAction
  | ILoginFormSubmitSuccessAction
  | ILoginFormSubmitFailedAction

export const updateLoginFormStateAction = (
  inputName: string,
  inputValue: string
): IUpdateLoginFormStateAction => {
  return {
    type: UPDATE_LOGIN_FORM_STATE,
    payload: {
      field: inputName,
      value: inputValue,
    },
  }
}
export const clearLoginFormStateAction = (): IClearLoginFormStateAction => {
  return {
    type: CLEAR_LOGIN_FORM_STATE,
  }
}
export const clearLoginStateAction = (): IClearLoginStateAction => {
  return {
    type: CLEAR_LOGIN_STATE,
  }
}
export const loginFormSubmitRequestAction =
  (): ILoginFormSubmitRequestAction => {
    return {
      type: LOGIN_FORM_SUBMIT_REQUEST,
    }
  }
export const loginFormSubmitSuccessAction = (
  authResponse: TAuthResponse
): ILoginFormSubmitSuccessAction => {
  return {
    type: LOGIN_FORM_SUBMIT_SUCCESS,
    payload: authResponse,
  }
}
export const loginFormSubmitFailedAction = (): ILoginFormSubmitFailedAction => {
  return {
    type: LOGIN_FORM_SUBMIT_FAILED,
  }
}

//@ts-ignore
export const loginFormSubmitThunk = (email, password) => (dispatch) => {
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
