import { NavigateFunction } from 'react-router-dom'
import * as api from '../../utils/api'
import {
  CLEAR_PWD_RESET_FORM_STATE,
  CLEAR_PWD_RESET_STATE,
  PWD_RESET_FORM_SUBMIT_FAILED,
  PWD_RESET_FORM_SUBMIT_REQUEST,
  PWD_RESET_FORM_SUBMIT_SUCCESS,
  UPDATE_PWD_RESET_FORM_STATE,
} from '../../utils/constants'
import { AppDispatch, AppThunk } from '../types/store'
import { TPasswordResetResponse } from '../types/data'
import { setIsErrorModalOpenAction } from './modal-actions'
import { clearPwdRestoreStateAction } from './password-restore-actions'

interface IUpdatePwdResetFormStateAction {
  readonly type: typeof UPDATE_PWD_RESET_FORM_STATE
  readonly payload: {
    field: string
    value: string
  }
}
interface IClearPwdResetFormStateAction {
  readonly type: typeof CLEAR_PWD_RESET_FORM_STATE
}
interface IClearPwdResetStateAction {
  readonly type: typeof CLEAR_PWD_RESET_STATE
}
interface IPwdResetFormSubmitRequestAction {
  readonly type: typeof PWD_RESET_FORM_SUBMIT_REQUEST
}
interface IPwdResetFormSubmitSuccessAction {
  readonly type: typeof PWD_RESET_FORM_SUBMIT_SUCCESS
  readonly payload: TPasswordResetResponse
}
interface IPwdResetFormSubmitFailedAction {
  readonly type: typeof PWD_RESET_FORM_SUBMIT_FAILED
}
export type TPwdResetActions =
  | IUpdatePwdResetFormStateAction
  | IClearPwdResetFormStateAction
  | IClearPwdResetStateAction
  | IPwdResetFormSubmitRequestAction
  | IPwdResetFormSubmitSuccessAction
  | IPwdResetFormSubmitFailedAction

export const updatePwdResetFormStateAction = (
  inputName: string,
  inputValue: string
): IUpdatePwdResetFormStateAction => {
  return {
    type: UPDATE_PWD_RESET_FORM_STATE,
    payload: {
      field: inputName,
      value: inputValue,
    },
  }
}

export const clearPwdResetFormStateAction =
  (): IClearPwdResetFormStateAction => {
    return {
      type: CLEAR_PWD_RESET_FORM_STATE,
    }
  }

export const clearPwdResetStateAction = (): IClearPwdResetStateAction => {
  return {
    type: CLEAR_PWD_RESET_STATE,
  }
}

export const pwdResetFormSubmitRequestAction =
  (): IPwdResetFormSubmitRequestAction => {
    return {
      type: PWD_RESET_FORM_SUBMIT_REQUEST,
    }
  }

export const pwdResetFormSubmitSuccessAction = (
  resetFormSubmitResponse: TPasswordResetResponse
): IPwdResetFormSubmitSuccessAction => {
  return {
    type: PWD_RESET_FORM_SUBMIT_SUCCESS,
    payload: resetFormSubmitResponse,
  }
}

export const pwdResetFormSubmitFailedAction =
  (): IPwdResetFormSubmitFailedAction => {
    return {
      type: PWD_RESET_FORM_SUBMIT_FAILED,
    }
  }

export const passwordResetFormSubmitThunk =
  (
    { token, password }: Record<string, string>,
    navigate: NavigateFunction
  ): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(pwdResetFormSubmitRequestAction())

    return api
      .sendPasswordResetRequest({ token, password })
      .then((res) => {
        if (res.success) {
          dispatch(clearPwdResetFormStateAction())
          dispatch(clearPwdRestoreStateAction())
          navigate('/', { replace: true })
        }
        return dispatch(pwdResetFormSubmitSuccessAction(res))
      })
      .catch((err) => {
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(pwdResetFormSubmitFailedAction())
      })
  }
