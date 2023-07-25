import {
  CLEAR_ORDER_STATE,
  CREATE_ORDER_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  IGNORE_ORDER_ERROR,
} from '../actions/order-actions'

const initialState = {
  response: null,
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
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
    case CREATE_ORDER_ERROR:
      return {
        ...state,
        response: null,
        error: true,
        isLoading: false,
      }
    case IGNORE_ORDER_ERROR:
      return {
        ...state,
        error: false,
      }
    case CLEAR_ORDER_STATE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
