import {
  TWSUserHistoryActions,
  WS_CLEAN_USER_HISTORY_STATE,
  WS_USER_HISTORY_CONNECTION_CLOSED,
  WS_USER_HISTORY_CONNECTION_ERROR,
  WS_USER_HISTORY_CONNECTION_SUCCESS,
  WS_USER_HISTORY_GET_MESSAGE,
} from '../actions/ws-user-history-actions'

import { TOrder } from '../types/ws-data'

type TUserHistoryReducerState = {
  wsConnected: boolean
  orders: TOrder[]
  total: number
  totalToday: number
  error: Event | null
}

export const initialState: TUserHistoryReducerState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: null,
}

export const wsUserHistoryReducer = (
  state = initialState,
  action: TWSUserHistoryActions
): TUserHistoryReducerState => {
  switch (action.type) {
    case WS_USER_HISTORY_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wsConnected: true,
      }
    case WS_USER_HISTORY_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      }
    case WS_USER_HISTORY_CONNECTION_CLOSED:
      return {
        ...state,
        error: null,
        wsConnected: false,
      }
    case WS_USER_HISTORY_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      }
    case WS_CLEAN_USER_HISTORY_STATE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
