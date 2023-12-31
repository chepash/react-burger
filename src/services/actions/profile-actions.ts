import { TUserDataResponse } from '../types/data'

export const UPDATE_PROFILE_FORM_STATE = 'UPDATE_PROFILE_FORM_STATE'
export const CLEAR_PROFILE_FORM_STATE = 'CLEAR_PROFILE_FORM_STATE'
export const CLEAR_PROFILE_STATE = 'CLEAR_PROFILE_STATE'
export const PROFILE_FORM_SUBMIT_REQUEST = 'PROFILE_FORM_SUBMIT_REQUEST'
export const PROFILE_FORM_SUBMIT_SUCCESS = 'PROFILE_FORM_SUBMIT_SUCCESS'
export const PROFILE_FORM_SUBMIT_FAILED = 'PROFILE_FORM_SUBMIT_FAILED'

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
