import {
  CLEAR_ORDER_STATE,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from '../../utils/constants'
import { TPlaceOrderResponse } from '../../utils/types'
import { TOrderActions } from '../actions/order-actions'

type TOrderState = {
  response: null | TPlaceOrderResponse
  isLoading: boolean
  isError: null | boolean
}

const initialState = {
  response: null,
  isLoading: false,
  isError: null,
}

export const reducer = (
  state: TOrderState = initialState,
  action: TOrderActions
) => {
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
  }

  const _exhaustiveCheck: never = action
}
