import * as api from '../../utils/api'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'
import {
  profileFormSubmitFailedAction,
  profileFormSubmitRequestAction,
  profileFormSubmitSuccessAction,
  updateProfileFormStateAction,
} from '../actions/profile-actions'
import { AppDispatch, AppThunk } from '../types/store'
import { getUserThunk } from './get-user-thunk'

export const profileFormSubmitThunk =
  (changedInputs: Record<string, string>): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(profileFormSubmitRequestAction())

    return api
      .updateUserData(changedInputs)
      .then((res) => {
        dispatch(profileFormSubmitSuccessAction(res))
        dispatch(updateProfileFormStateAction('password', ''))
        dispatch(getUserThunk())
      })
      .catch((err) => {
        dispatch(setIsErrorModalOpenAction(true))
        return dispatch(profileFormSubmitFailedAction())
      })
  }
