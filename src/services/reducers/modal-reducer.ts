import {
  SET_CURRENT_ORDER_DETAILS,
  SET_CURRENT_INGREDIENT,
  SET_IS_ERROR_MODAL_OPEN,
  SET_IS_INGREDIENT_MODAL_OPEN,
  SET_IS_ORDER_DETAILS_MODAL_OPEN,
  SET_IS_PLACED_NEW_ORDER_MODAL_OPEN,
  TModalActions,
} from '../actions/modal-actions'
import { TIngredient } from '../types/data'
import { TOrderDetails } from '../types/ws-data'

type TModalState = {
  currentIngredient: null | TIngredient
  isIngredientModalOpen: boolean

  currentOrderDetails: null | TOrderDetails
  isOrderDetailsModalOpen: boolean

  isPlacedNewOrderModalOpen: boolean
  isErrorModalOpen: boolean
}

export const initialState: TModalState = {
  currentIngredient: null,
  isIngredientModalOpen: false,

  currentOrderDetails: null,
  isOrderDetailsModalOpen: false,

  isPlacedNewOrderModalOpen: false,
  isErrorModalOpen: false,
}

export const modalReducer = (state = initialState, action: TModalActions) => {
  switch (action.type) {
    case SET_IS_INGREDIENT_MODAL_OPEN:
      return {
        ...state,
        isIngredientModalOpen: action.payload,
      }
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient: action.payload,
      }
    case SET_CURRENT_ORDER_DETAILS:
      return {
        ...state,
        currentOrderDetails: action.payload,
      }
    case SET_IS_PLACED_NEW_ORDER_MODAL_OPEN:
      return {
        ...state,
        isPlacedNewOrderModalOpen: action.payload,
      }
    case SET_IS_ORDER_DETAILS_MODAL_OPEN:
      return {
        ...state,
        isOrderDetailsModalOpen: action.payload,
      }
    case SET_IS_ERROR_MODAL_OPEN:
      return {
        ...state,
        isErrorModalOpen: action.payload,
      }
    default:
      const exhaustiveCheck: never = action
      return state
  }
}
