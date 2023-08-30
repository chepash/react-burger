import { NavigateFunction } from 'react-router-dom'
import * as api from '../../utils/api'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'
import {
  clearPwdRestoreFormStateAction,
  pwdRestoreFormSubmitFailedAction,
  pwdRestoreFormSubmitRequestAction,
  pwdRestoreFormSubmitSuccessAction,
} from '../actions/password-restore-actions'
import { AppDispatch, AppThunk } from '../types/store'

export const passwordRestoreFormSubmitThunk =
  (email: string, navigate: NavigateFunction): AppThunk =>
  (dispatch: AppDispatch) => {
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
