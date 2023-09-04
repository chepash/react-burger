import { NavigateFunction } from 'react-router-dom'
import * as api from '../../utils/api'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'
import {
  clearPwdResetFormStateAction,
  pwdResetFormSubmitFailedAction,
  pwdResetFormSubmitRequestAction,
  pwdResetFormSubmitSuccessAction,
} from '../actions/password-reset-actions'
import { clearPwdRestoreStateAction } from '../actions/password-restore-actions'
import { AppDispatch, AppThunk } from '../types/store'

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
        dispatch(clearPwdResetFormStateAction())
        dispatch(clearPwdRestoreStateAction())
        navigate('/', { replace: true })

        return dispatch(pwdResetFormSubmitSuccessAction(res))
      })
      .catch(() => {
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(pwdResetFormSubmitFailedAction())
      })
  }
