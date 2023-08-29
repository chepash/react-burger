import { ORDERS_RESPONSE } from '../../utils/constants'
import {
  TWSFeedActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
} from '../actions/feed-actions'
import { TFeedResponse } from '../types/data'

export type TFeedReducerState = {
  wsConnected: boolean
  response: TFeedResponse

  error?: Event
}

const initialState: TFeedReducerState = {
  wsConnected: false,
  response: ORDERS_RESPONSE,
}

export const feedReducer = (state = initialState, action: TWSFeedActions) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
      }
    case WS_CONNECTION_ERROR:
      return {
        ...state,
      }
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
      }
    default:
      // const exhaustiveCheck: never = action
      return state
  }
}
