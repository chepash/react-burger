import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from '../../utils/constants'
import { TIngredient } from '../../utils/types'
import { TIngredientsActions } from '../actions/ingredients-actions'

export type TIngredientsState = {
  ingredients: TIngredient[]
  isLoading: boolean
  isError: boolean | null
}

const initialState = {
  ingredients: [],
  isLoading: false,
  isError: null,
}

export const reducer = (
  state: TIngredientsState = initialState,
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
  }

  const _exhaustiveCheck: never = action
}
