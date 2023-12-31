import {
  CLEAR_ORDER_STATE,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  TOrderActions,
} from '../actions/order-actions'
import { TPlaceNewOrderResponse } from '../types/data'

type TOrderState = {
  response: null | TPlaceNewOrderResponse
  isLoading: boolean
  isError: null | boolean
}

export const initialState: TOrderState = {
  response: null,
  isLoading: false,
  isError: null,
}

export const orderReducer = (state = initialState, action: TOrderActions) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case CREATE_ORDER_FAILED:
      return {
        ...state,
        response: null,
        isError: true,
        isLoading: false,
      }
    case CLEAR_ORDER_STATE:
      return {
        ...initialState,
      }
    default:
      const exhaustiveCheck: never = action
      return state
  }
}
