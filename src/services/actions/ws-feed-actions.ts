import { TFeedResponse } from '../types/ws-data'

export const WS_FEED_CONNECTION_START = 'WS_FEED_CONNECTION_START'
export const WS_FEED_CONNECTION_END = 'WS_FEED_CONNECTION_END'
export const WS_FEED_CONNECTION_SUCCESS = 'WS_FEED_CONNECTION_SUCCESS'
export const WS_FEED_CONNECTION_ERROR = 'WS_FEED_CONNECTION_ERROR'
export const WS_FEED_CONNECTION_CLOSED = 'WS_FEED_CONNECTION_CLOSED'
export const WS_FEED_GET_MESSAGE = 'WS_FEED_GET_MESSAGE'

export interface IWSFeedConnect {
  readonly type: typeof WS_FEED_CONNECTION_START
  readonly payload: string
}

export interface IWSFeedDisconnect {
  readonly type: typeof WS_FEED_CONNECTION_END
}

export interface IWSFeedConnectionSuccessAction {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS
}

export interface IWSFeedConnectionErrorAction {
  readonly type: typeof WS_FEED_CONNECTION_ERROR
  readonly payload: Event
}

export interface IWSFeedConnectionClosedAction {
  readonly type: typeof WS_FEED_CONNECTION_CLOSED
}

export interface IWSFeedGetMessageAction {
  readonly type: typeof WS_FEED_GET_MESSAGE
  readonly payload: TFeedResponse
}

export type TWSFeedActions =
  | IWSFeedConnect
  | IWSFeedDisconnect
  | IWSFeedConnectionSuccessAction
  | IWSFeedConnectionErrorAction
  | IWSFeedConnectionClosedAction
  | IWSFeedGetMessageAction

export const wsFeedConnect = (url: string): IWSFeedConnect => {
  return {
    type: WS_FEED_CONNECTION_START,
    payload: url,
  }
}

export const wsFeedDisconnect = (): IWSFeedDisconnect => {
  return {
    type: WS_FEED_CONNECTION_END,
  }
}

// export const wsFeedConnectionSuccessAction =
//   (): IWSFeedConnectionSuccessAction => {
//     return {
//       type: WS_FEED_CONNECTION_SUCCESS,
//     }
//   }

// export const wsFeedConnectionErrorAction = (
//   event: Event
// ): IWSFeedConnectionErrorAction => {
//   return {
//     type: WS_FEED_CONNECTION_ERROR,
//     payload: event,
//   }
// }

// export const wsFeedConnectionClosedAction =
//   (): IWSFeedConnectionClosedAction => {
//     return {
//       type: WS_FEED_CONNECTION_CLOSED,
//     }
//   }

// export const wsFeedGetMessageAction = (
//   response: TFeedResponse
// ): IWSFeedGetMessageAction => {
//   return {
//     type: WS_FEED_GET_MESSAGE,
//     payload: response,
//   }
// }
