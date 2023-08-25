import {
  SET_CURRENT_INGREDIENT,
  SET_IS_ERROR_MODAL_OPEN,
  SET_IS_INGREDIENT_MODAL_OPEN,
  SET_IS_ORDER_MODAL_OPEN,
} from '../../utils/constants'
import { TIngredient } from '../../utils/types'
import { TModalActions } from '../actions/modal-actions'

type TModalState = {
  currentIngredient: null | TIngredient
  isIngredientModalOpen: boolean
  isOrderModalOpen: boolean
  isErrorModalOpen: boolean
}

const initialState = {
  currentIngredient: null,
  isIngredientModalOpen: false,
  isOrderModalOpen: false,
  isErrorModalOpen: false,
}

export const reducer = (
  state: TModalState = initialState,
  action: TModalActions
) => {
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
  }

  const _exhaustiveCheck: never = action
}
