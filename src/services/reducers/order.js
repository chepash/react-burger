import {
  CLOSE_ORDER_MODAL,
  CREATE_ORDER_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  IGNORE_ORDER_ERROR,
} from '../actions/order'

const initialState = {
  response: null,

  isLoading: false,
  error: null,

  isOrderModalOpen: false,
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
        isOrderModalOpen: true,
        isLoading: false,
      }
    case CREATE_ORDER_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case CLOSE_ORDER_MODAL:
      return {
        ...state,
        isOrderModalOpen: false,
      }
    case IGNORE_ORDER_ERROR:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}
