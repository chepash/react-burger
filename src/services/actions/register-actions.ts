import { TAuthResponse } from '../types/data'

export const UPDATE_REGISTER_FORM_STATE = 'UPDATE_REGISTER_FORM_STATE'
export const CLEAR_REGISTER_FORM_STATE = 'CLEAR_REGISTER_FORM_STATE'
export const CLEAR_REGISTER_STATE = 'CLEAR_REGISTER_STATE'
export const REGISTER_FORM_SUBMIT_REQUEST = 'REGISTER_FORM_SUBMIT_REQUEST'
export const REGISTER_FORM_SUBMIT_SUCCESS = 'REGISTER_FORM_SUBMIT_SUCCESS'
export const REGISTER_FORM_SUBMIT_FAILED = 'REGISTER_FORM_SUBMIT_FAILED'

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
