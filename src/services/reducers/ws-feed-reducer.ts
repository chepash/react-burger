import {
  TWSActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from '../actions/ws-feed-actions'
import { TOrder } from '../types/ws-data'

type TFeedReducerState = {
  wsConnected: boolean

  orders: TOrder[]
  total: number
  totalToday: number

  error: Event | null
}

const initialState: TFeedReducerState = {
  wsConnected: false,

  orders: [],
  total: 0,
  totalToday: 0,

  error: null,
}

export const feedReducer = (
  state = initialState,
  action: TWSActions
): TFeedReducerState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wsConnected: true,
      }
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      }
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: null,
        wsConnected: false,
      }
    case WS_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      }
    default:
      return state
  }
}
