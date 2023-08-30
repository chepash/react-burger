import {
  TWSUserFeedActions,
  WS_CLEAN_USER_FEED_STATE,
  WS_USER_FEED_CONNECTION_CLOSED,
  WS_USER_FEED_CONNECTION_ERROR,
  WS_USER_FEED_CONNECTION_SUCCESS,
  WS_USER_FEED_GET_MESSAGE,
} from '../actions/ws-user-feed-actions'

import { TOrder } from '../types/ws-data'

type TUserFeedReducerState = {
  wsConnected: boolean
  orders: TOrder[]
  total: number
  totalToday: number
  error: Event | null
}

const initialState: TUserFeedReducerState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: null,
}

export const wsUserFeedReducer = (
  state = initialState,
  action: TWSUserFeedActions
): TUserFeedReducerState => {
  switch (action.type) {
    case WS_USER_FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wsConnected: true,
      }
    case WS_USER_FEED_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      }
    case WS_USER_FEED_CONNECTION_CLOSED:
      return {
        ...state,
        error: null,
        wsConnected: false,
      }
    case WS_USER_FEED_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      }
    case WS_CLEAN_USER_FEED_STATE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
