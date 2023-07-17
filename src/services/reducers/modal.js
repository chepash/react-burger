import {
  SET_IS_ERROR_MODAL_OPEN,
  SET_IS_INGREDIENT_MODAL_OPEN,
  SET_IS_ORDER_MODAL_OPEN,
  SET_CURRENT_INGREDIENT,
} from '../actions/modal'

const initialState = {
  currentIngredient: {},
  isIngredientModalOpen: false,
  isOrderModalOpen: false,
  isErrorModalOpen: false,
}

export const reducer = (state = initialState, action) => {
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
    case SET_IS_ORDER_MODAL_OPEN:
      return {
        ...state,
        isOrderModalOpen: action.payload,
      }
    case SET_IS_ERROR_MODAL_OPEN:
      return {
        ...state,
        isErrorModalOpen: action.payload,
      }
    default:
      return state
  }
}
