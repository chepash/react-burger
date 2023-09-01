import * as api from '../../utils/api'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'
import { updateProfileFormStateAction } from '../actions/profile-actions'
import {
  getUserDataFailedAction,
  getUserDataRequestAction,
  getUserDataSuccessAction,
  setIsLoggedInAction,
  setUserDataAction,
} from '../actions/user-actions'
import { AppDispatch, AppThunk } from '../types/store'

export const getUserThunk = (): AppThunk => (dispatch: AppDispatch) => {
  const accessToken = localStorage.getItem('accessToken')

  if (accessToken) {
    dispatch(getUserDataRequestAction())

    return api
      .fetchUserData()
      .then((res) => {
        dispatch(setUserDataAction(res.user))
        dispatch(getUserDataSuccessAction(res))
        dispatch(updateProfileFormStateAction('name', res.user.name))
        dispatch(updateProfileFormStateAction('email', res.user.email))
        dispatch(setIsLoggedInAction(true))
      })
      .catch(() => {
        dispatch(setIsLoggedInAction(false))
        setIsErrorModalOpenAction(true)
        return dispatch(getUserDataFailedAction())
      })
  }
}
