import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  IGNORE_INGREDIENTS_ERROR,
  SET_IS_INGREDIENT_MODAL_OPEN,
  SET_CURRENT_INGREDIENT,
} from '../actions/ingredients'

const initialState = {
  ingredients: [],

  isLoading: false,
  error: null,

  currentIngredient: {},
  isIngredientModalOpen: false,
}

export const reducer = (state = initialState, action) => {
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
    case GET_INGREDIENTS_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case IGNORE_INGREDIENTS_ERROR:
      return {
        ...state,
        error: false,
      }
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient: action.payload,
      }
    case SET_IS_INGREDIENT_MODAL_OPEN:
      return {
        ...state,
        isIngredientModalOpen: action.payload,
      }
    default:
      return state
  }
}
