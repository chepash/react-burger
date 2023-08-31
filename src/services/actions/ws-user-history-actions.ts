import { TFeedResponse } from '../types/ws-data'

export const WS_USER_HISTORY_CONNECT = 'WS_USER_FEED_CONNECT'
export const WS_USER_HISTORY_DISCONNECT = 'WS_USER_FEED_DISCONNECT'
export const WS_USER_HISTORY_CONNECTION_SUCCESS =
  'WS_USER_HISTORY_CONNECTION_SUCCESS'
export const WS_USER_HISTORY_CONNECTION_ERROR =
  'WS_USER_HISTORY_CONNECTION_ERROR'
export const WS_USER_HISTORY_CONNECTION_CLOSED =
  'WS_USER_HISTORY_CONNECTION_CLOSED'
export const WS_USER_HISTORY_GET_MESSAGE = 'WS_USER_HISTORY_GET_MESSAGE'
export const WS_CLEAN_USER_HISTORY_STATE = 'WS_CLEAN_USER_HISTORY_STATE'

export interface IWSUserHistoryConnect {
  readonly type: typeof WS_USER_HISTORY_CONNECT
  readonly payload: string
}

export interface IWSUserHistoryDisconnect {
  readonly type: typeof WS_USER_HISTORY_DISCONNECT
}

export interface IWSUserHistoryConnectionSuccessAction {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_SUCCESS
}

export interface IWSUserHistoryConnectionErrorAction {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_ERROR
  readonly payload: Event
}

export interface IWSUserHistoryConnectionClosedAction {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_CLOSED
}

export interface IWSUserHistoryGetMessageAction {
  readonly type: typeof WS_USER_HISTORY_GET_MESSAGE
  readonly payload: TFeedResponse
}

export interface IWSCleanUserHistoryStateAction {
  readonly type: typeof WS_CLEAN_USER_HISTORY_STATE
}

export type TWSUserHistoryActions =
  | IWSUserHistoryConnect
  | IWSUserHistoryDisconnect
  | IWSUserHistoryConnectionSuccessAction
  | IWSUserHistoryConnectionErrorAction
  | IWSUserHistoryConnectionClosedAction
  | IWSUserHistoryGetMessageAction
  | IWSCleanUserHistoryStateAction

export const wsUserHistoryConnect = (url: string): IWSUserHistoryConnect => {
  return {
    type: WS_USER_HISTORY_CONNECT,
    payload: url,
  }
}

export const wsUserHistoryDisconnect = (): IWSUserHistoryDisconnect => {
  return {
    type: WS_USER_HISTORY_DISCONNECT,
  }
}

export const wsCleanUserHistoryStateAction =
  (): IWSCleanUserHistoryStateAction => {
    return {
      type: WS_CLEAN_USER_HISTORY_STATE,
    }
  }
