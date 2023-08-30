import {
  CLEAR_PWD_RESTORE_FORM_STATE,
  CLEAR_PWD_RESTORE_STATE,
  PWD_RESTORE_FORM_SUBMIT_FAILED,
  PWD_RESTORE_FORM_SUBMIT_REQUEST,
  PWD_RESTORE_FORM_SUBMIT_SUCCESS,
  UPDATE_PWD_RESTORE_FORM_STATE,
} from '../../utils/constants'
import { TSendRecoveryEmailResponse } from '../types/data'

interface IUpdatePwdRestoreFormStateAction {
  readonly type: typeof UPDATE_PWD_RESTORE_FORM_STATE
  readonly payload: {
    field: string
    value: string
  }
}
interface IClearPwdRestoreFormStateAction {
  readonly type: typeof CLEAR_PWD_RESTORE_FORM_STATE
}
interface IClearPwdRestoreStateAction {
  readonly type: typeof CLEAR_PWD_RESTORE_STATE
}
interface IPwdRestoreFormSubmitRequestAction {
  readonly type: typeof PWD_RESTORE_FORM_SUBMIT_REQUEST
}
interface IPwdRestoreFormSubmitSuccessAction {
  readonly type: typeof PWD_RESTORE_FORM_SUBMIT_SUCCESS
  readonly payload: TSendRecoveryEmailResponse
}
interface IPwdRestoreFormSubmitFailedAction {
  readonly type: typeof PWD_RESTORE_FORM_SUBMIT_FAILED
}

export type TPwdRestoreActions =
  | IUpdatePwdRestoreFormStateAction
  | IClearPwdRestoreFormStateAction
  | IClearPwdRestoreStateAction
  | IPwdRestoreFormSubmitRequestAction
  | IPwdRestoreFormSubmitSuccessAction
  | IPwdRestoreFormSubmitFailedAction

// Define action creators
export const updatePwdRestoreFormStateAction = (
  inputName: string,
  inputValue: string
): IUpdatePwdRestoreFormStateAction => {
  return {
    type: UPDATE_PWD_RESTORE_FORM_STATE,
    payload: {
      field: inputName,
      value: inputValue,
    },
  }
}

export const clearPwdRestoreFormStateAction =
  (): IClearPwdRestoreFormStateAction => {
    return {
      type: CLEAR_PWD_RESTORE_FORM_STATE,
    }
  }

export const clearPwdRestoreStateAction = (): IClearPwdRestoreStateAction => {
  return {
    type: CLEAR_PWD_RESTORE_STATE,
  }
}

export const pwdRestoreFormSubmitRequestAction =
  (): IPwdRestoreFormSubmitRequestAction => {
    return {
      type: PWD_RESTORE_FORM_SUBMIT_REQUEST,
    }
  }

export const pwdRestoreFormSubmitSuccessAction = (
  sendRecoveryEmailResponse: TSendRecoveryEmailResponse
): IPwdRestoreFormSubmitSuccessAction => {
  return {
    type: PWD_RESTORE_FORM_SUBMIT_SUCCESS,
    payload: sendRecoveryEmailResponse,
  }
}

export const pwdRestoreFormSubmitFailedAction =
  (): IPwdRestoreFormSubmitFailedAction => {
    return {
      type: PWD_RESTORE_FORM_SUBMIT_FAILED,
    }
  }
