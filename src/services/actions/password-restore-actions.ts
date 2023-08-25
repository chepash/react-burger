import * as api from '../../utils/api'
import {
  CLEAR_PWD_RESTORE_FORM_STATE,
  CLEAR_PWD_RESTORE_STATE,
  PWD_RESTORE_FORM_SUBMIT_FAILED,
  PWD_RESTORE_FORM_SUBMIT_REQUEST,
  PWD_RESTORE_FORM_SUBMIT_SUCCESS,
  UPDATE_PWD_RESTORE_FORM_STATE,
} from '../../utils/constants'
import { TSendRecoveryEmailResponse } from '../../utils/types'
import { setIsErrorModalOpenAction } from './modal-actions'

export interface IUpdatePwdRestoreFormStateAction {
  readonly type: typeof UPDATE_PWD_RESTORE_FORM_STATE
  readonly payload: {
    field: string
    value: string
  }
}

export interface IClearPwdRestoreFormStateAction {
  readonly type: typeof CLEAR_PWD_RESTORE_FORM_STATE
}

export interface IClearPwdRestoreStateAction {
  readonly type: typeof CLEAR_PWD_RESTORE_STATE
}

export interface IPwdRestoreFormSubmitRequestAction {
  readonly type: typeof PWD_RESTORE_FORM_SUBMIT_REQUEST
}

export interface IPwdRestoreFormSubmitSuccessAction {
  readonly type: typeof PWD_RESTORE_FORM_SUBMIT_SUCCESS
  readonly payload: TSendRecoveryEmailResponse
}

export interface IPwdRestoreFormSubmitFailedAction {
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

export const passwordRestoreFormSubmitThunk =
  //@ts-ignore
  (email, navigate) => (dispatch) => {
    dispatch(pwdRestoreFormSubmitRequestAction())

    return api
      .sendPasswordRecoveryEmail(email)
      .then((res) => {
        if (res.success) {
          dispatch(pwdRestoreFormSubmitSuccessAction(res))
          dispatch(clearPwdRestoreFormStateAction())
          navigate('/reset-password', { replace: true })
        }
      })
      .catch((err) => {
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(pwdRestoreFormSubmitFailedAction())
      })
  }
