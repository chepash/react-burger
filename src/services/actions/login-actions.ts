import { TAuthResponse } from '../types/data'

export const UPDATE_LOGIN_FORM_STATE = 'UPDATE_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_FORM_STATE = 'CLEAR_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_STATE = 'CLEAR_LOGIN_STATE'
export const LOGIN_FORM_SUBMIT_REQUEST = 'LOGIN_FORM_SUBMIT_REQUEST'
export const LOGIN_FORM_SUBMIT_SUCCESS = 'LOGIN_FORM_SUBMIT_SUCCESS'
export const LOGIN_FORM_SUBMIT_FAILED = 'LOGIN_FORM_SUBMIT_FAILED'

interface IUpdateLoginFormStateAction {
  readonly type: typeof UPDATE_LOGIN_FORM_STATE
  readonly payload: {
    field: string
    value: string
  }
}
interface IClearLoginFormStateAction {
  readonly type: typeof CLEAR_LOGIN_FORM_STATE
}
interface IClearLoginStateAction {
  readonly type: typeof CLEAR_LOGIN_STATE
}
interface ILoginFormSubmitRequestAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_REQUEST
}
interface ILoginFormSubmitSuccessAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_SUCCESS
  readonly payload: TAuthResponse
}
interface ILoginFormSubmitFailedAction {
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
