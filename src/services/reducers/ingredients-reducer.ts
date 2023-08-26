import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from '../../utils/constants'
import { TIngredient } from '../types/data'
import { TIngredientsActions } from '../actions/ingredients-actions'

export type TIngredientsState = {
  ingredients: TIngredient[]
  isLoading: boolean
  isError: boolean | null
}

const initialState: TIngredientsState = {
  ingredients: [],
  isLoading: false,
  isError: null,
}

export const ingredientsReducer = (
  state = initialState,
  action: TIngredientsActions
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        isLoading: false,
      }
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredients: [],
        isError: true,
        isLoading: false,
      }
    default:
      const exhaustiveCheck: never = action
      return state
  }
}
