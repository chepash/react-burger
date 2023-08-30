import {
  CLEAR_USER_STATE,
  GET_USER_DATA_FAILED,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  SET_IS_LOGGED_IN,
  SET_USER_DATA,
} from '../../utils/constants'
import { TLogoutResponse, TUser, TUserDataResponse } from '../types/data'

interface IGetUserDataRequestAction {
  readonly type: typeof GET_USER_DATA_REQUEST
}
interface IGetUserDataSuccessAction {
  readonly type: typeof GET_USER_DATA_SUCCESS
  readonly payload: TUserDataResponse
}
interface IGetUserDataFailedAction {
  readonly type: typeof GET_USER_DATA_FAILED
}
interface ILogoutUserRequestAction {
  readonly type: typeof LOGOUT_USER_REQUEST
}
interface ILogoutUserSuccessAction {
  readonly type: typeof LOGOUT_USER_SUCCESS
  readonly payload: TLogoutResponse
}
interface ILogoutUserFailedAction {
  readonly type: typeof LOGOUT_USER_FAILED
}
interface ISetUserDataAction {
  readonly type: typeof SET_USER_DATA
  readonly payload: TUser
}
interface ISetIsLoggedInAction {
  readonly type: typeof SET_IS_LOGGED_IN
  readonly payload: boolean
}
interface IClearUserStateAction {
  readonly type: typeof CLEAR_USER_STATE
}
export type TUserActions =
  | IGetUserDataRequestAction
  | IGetUserDataSuccessAction
  | IGetUserDataFailedAction
  | ILogoutUserRequestAction
  | ILogoutUserSuccessAction
  | ILogoutUserFailedAction
  | ISetUserDataAction
  | ISetIsLoggedInAction
  | IClearUserStateAction

export const getUserDataRequestAction = (): IGetUserDataRequestAction => {
  return {
    type: GET_USER_DATA_REQUEST,
  }
}

export const getUserDataSuccessAction = (
  userDataResponse: TUserDataResponse
): IGetUserDataSuccessAction => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: userDataResponse,
  }
}

export const getUserDataFailedAction = (): IGetUserDataFailedAction => {
  return {
    type: GET_USER_DATA_FAILED,
  }
}

export const logoutUserRequestAction = (): ILogoutUserRequestAction => {
  return {
    type: LOGOUT_USER_REQUEST,
  }
}

export const logoutUserSuccessAction = (
  logoutResponse: TLogoutResponse
): ILogoutUserSuccessAction => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: logoutResponse,
  }
}

export const logoutUserFailedAction = (): ILogoutUserFailedAction => {
  return {
    type: LOGOUT_USER_FAILED,
  }
}

export const setUserDataAction = (userData: TUser): ISetUserDataAction => {
  return {
    type: SET_USER_DATA,
    payload: userData,
  }
}

export const setIsLoggedInAction = (
  isLoggedIn: boolean
): ISetIsLoggedInAction => {
  return {
    type: SET_IS_LOGGED_IN,
    payload: isLoggedIn,
  }
}

export const clearUserStateAction = (): IClearUserStateAction => {
  return {
    type: CLEAR_USER_STATE,
  }
}
