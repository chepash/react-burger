import * as api from '../../utils/api'
import { clearLoginStateAction } from '../actions/login-actions'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'
import { clearOrderStateAction } from '../actions/order-actions'
import { clearPwdResetStateAction } from '../actions/password-reset-actions'
import { clearPwdRestoreStateAction } from '../actions/password-restore-actions'
import { clearProfileStateAction } from '../actions/profile-actions'
import { clearRegisterStateAction } from '../actions/register-actions'
import {
  clearUserStateAction,
  logoutUserFailedAction,
  logoutUserRequestAction,
  logoutUserSuccessAction,
} from '../actions/user-actions'
import { wsCleanUserHistoryStateAction } from '../actions/ws-user-history-actions'
import { AppDispatch, AppThunk } from '../types/store'

export const handleLogoutThunk = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(logoutUserRequestAction())

  return api
    .logoutUser()
    .then((res) => {
      if (res.success) {
        localStorage.clear()
        dispatch(clearLoginStateAction())
        dispatch(clearOrderStateAction())
        dispatch(clearRegisterStateAction())
        dispatch(clearPwdRestoreStateAction())
        dispatch(clearPwdResetStateAction())
        dispatch(clearProfileStateAction())
        dispatch(clearUserStateAction())
        dispatch(wsCleanUserHistoryStateAction())
      }

      return dispatch(logoutUserSuccessAction(res))
    })
    .catch(() => {
      dispatch(setIsErrorModalOpenAction(true))
      return dispatch(logoutUserFailedAction())
    })
}
