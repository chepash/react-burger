import { TFeedResponse } from '../types/ws-data'

export const WS_USER_FEED_CONNECTION_START = 'WS_USER_FEED_CONNECTION_START'
export const WS_USER_FEED_CONNECTION_END = 'WS_USER_FEED_CONNECTION_END'
export const WS_USER_FEED_CONNECTION_SUCCESS = 'WS_USER_FEED_CONNECTION_SUCCESS'
export const WS_USER_FEED_CONNECTION_ERROR = 'WS_USER_FEED_CONNECTION_ERROR'
export const WS_USER_FEED_CONNECTION_CLOSED = 'WS_USER_FEED_CONNECTION_CLOSED'
export const WS_USER_FEED_GET_MESSAGE = 'WS_USER_FEED_GET_MESSAGE'
export const WS_CLEAN_USER_FEED_STATE = 'WS_CLEAN_USER_FEED_STATE'

export interface IWSUserFeedConnect {
  readonly type: typeof WS_USER_FEED_CONNECTION_START
  readonly payload: string
}

export interface IWSUserFeedDisconnect {
  readonly type: typeof WS_USER_FEED_CONNECTION_END
}

export interface IWSUserFeedConnectionSuccessAction {
  readonly type: typeof WS_USER_FEED_CONNECTION_SUCCESS
}

export interface IWSUserFeedConnectionErrorAction {
  readonly type: typeof WS_USER_FEED_CONNECTION_ERROR
  readonly payload: Event
}

export interface IWSUserFeedConnectionClosedAction {
  readonly type: typeof WS_USER_FEED_CONNECTION_CLOSED
}

export interface IWSUserFeedGetMessageAction {
  readonly type: typeof WS_USER_FEED_GET_MESSAGE
  readonly payload: TFeedResponse
}

export interface IWSCleanUserFeedStateAction {
  readonly type: typeof WS_CLEAN_USER_FEED_STATE
}

export type TWSUserFeedActions =
  | IWSUserFeedConnect
  | IWSUserFeedDisconnect
  | IWSUserFeedConnectionSuccessAction
  | IWSUserFeedConnectionErrorAction
  | IWSUserFeedConnectionClosedAction
  | IWSUserFeedGetMessageAction
  | IWSCleanUserFeedStateAction

export const wsUserFeedConnect = (url: string): IWSUserFeedConnect => {
  return {
    type: WS_USER_FEED_CONNECTION_START,
    payload: url,
  }
}

export const wsUserFeedDisconnect = (): IWSUserFeedDisconnect => {
  return {
    type: WS_USER_FEED_CONNECTION_END,
  }
}

export const wsCleanUserFeedStateAction = (): IWSCleanUserFeedStateAction => {
  return {
    type: WS_CLEAN_USER_FEED_STATE,
  }
}
