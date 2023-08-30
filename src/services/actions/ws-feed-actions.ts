import { TFeedResponse } from '../types/ws-data'

export const WS_CONNECTION_START = 'WS_CONNECTION_START'
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS'
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR'
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED'
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE'
export const WS_CONNECTION_END = 'WS_CONNECTION_END'

export interface IWSConnectionStart {
  readonly type: typeof WS_CONNECTION_START
  readonly payload: string
}

export interface IWSConnectionEnd {
  readonly type: typeof WS_CONNECTION_END
}

export interface IWSConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWSConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR
  readonly payload: Event
}

export interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWSGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE
  readonly payload: TFeedResponse
}

export type TWSActions =
  | IWSConnectionStart
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetMessageAction
  | IWSConnectionEnd

export const wsConnectionStart = (url: string): IWSConnectionStart => {
  return {
    type: WS_CONNECTION_START,
    payload: url,
  }
}

export const wsConnectionEnd = (): IWSConnectionEnd => {
  return {
    type: WS_CONNECTION_END,
  }
}

export const wsConnectionErrorAction = (
  event: Event
): IWSConnectionErrorAction => {
  return {
    type: WS_CONNECTION_ERROR,
    payload: event,
  }
}

export const wsConnectionClosedAction = (): IWSConnectionClosedAction => {
  return {
    type: WS_CONNECTION_CLOSED,
  }
}

export const wsGetMessageAction = (
  response: TFeedResponse
): IWSGetMessageAction => {
  return {
    type: WS_GET_MESSAGE,
    payload: response,
  }
}

export const wsConnectionSuccessAction = (): IWSConnectionSuccessAction => {
  return {
    type: WS_CONNECTION_SUCCESS,
  }
}
