import { NavigateFunction } from 'react-router-dom'
import * as api from '../../utils/api'
import { ROUTE_RESET_PASSWORD } from '../../utils/constants'
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
        dispatch(pwdRestoreFormSubmitSuccessAction(res))
        dispatch(clearPwdRestoreFormStateAction())
        navigate(ROUTE_RESET_PASSWORD, { replace: true })
      })
      .catch(() => {
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(pwdRestoreFormSubmitFailedAction())
      })
  }
