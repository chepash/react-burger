import * as api from '../../utils/api'
import {
  CLEAR_PROFILE_FORM_STATE,
  CLEAR_PROFILE_STATE,
  PROFILE_FORM_SUBMIT_FAILED,
  PROFILE_FORM_SUBMIT_REQUEST,
  PROFILE_FORM_SUBMIT_SUCCESS,
  UPDATE_PROFILE_FORM_STATE,
} from '../../utils/constants'
import { TUserDataResponse } from '../../utils/types'
import { setIsErrorModalOpenAction } from './modal-actions'
import { getUserThunk } from './user-actions'

interface IUpdateProfileFormStateAction {
  readonly type: typeof UPDATE_PROFILE_FORM_STATE
  readonly payload: {
    field: string
    value: string
  }
}
interface IClearProfileFormStateAction {
  readonly type: typeof CLEAR_PROFILE_FORM_STATE
}
interface IClearProfileStateAction {
  readonly type: typeof CLEAR_PROFILE_STATE
}
interface IProfileFormSubmitRequestAction {
  readonly type: typeof PROFILE_FORM_SUBMIT_REQUEST
}
interface IProfileFormSubmitSuccessAction {
  readonly type: typeof PROFILE_FORM_SUBMIT_SUCCESS
  readonly payload: TUserDataResponse
}
interface IProfileFormSubmitFailedAction {
  readonly type: typeof PROFILE_FORM_SUBMIT_FAILED
}
export type TProfileActions =
  | IUpdateProfileFormStateAction
  | IClearProfileFormStateAction
  | IClearProfileStateAction
  | IProfileFormSubmitRequestAction
  | IProfileFormSubmitSuccessAction
  | IProfileFormSubmitFailedAction

export const updateProfileFormStateAction = (
  inputName: string,
  inputValue: string
): IUpdateProfileFormStateAction => {
  return {
    type: UPDATE_PROFILE_FORM_STATE,
    payload: {
      field: inputName,
      value: inputValue,
    },
  }
}

export const clearProfileFormStateAction = (): IClearProfileFormStateAction => {
  return {
    type: CLEAR_PROFILE_FORM_STATE,
  }
}

export const clearProfileStateAction = (): IClearProfileStateAction => {
  return {
    type: CLEAR_PROFILE_STATE,
  }
}

export const profileFormSubmitRequestAction =
  (): IProfileFormSubmitRequestAction => {
    return {
      type: PROFILE_FORM_SUBMIT_REQUEST,
    }
  }

export const profileFormSubmitSuccessAction = (
  userDataResponse: TUserDataResponse
): IProfileFormSubmitSuccessAction => {
  return {
    type: PROFILE_FORM_SUBMIT_SUCCESS,
    payload: userDataResponse,
  }
}

export const profileFormSubmitFailedAction =
  (): IProfileFormSubmitFailedAction => {
    return {
      type: PROFILE_FORM_SUBMIT_FAILED,
    }
  }

// @ts-ignore
export const profileFormSubmitThunk = (changedInputs) => (dispatch) => {
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
