import { SET_ALL_INGREDIENTS } from '../utils/constants'

export const initialState = {
  ingredients: [],

  constructorBun: {},
  constructorIngredients: [],

  currentIngredient: {},

  order: {},
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      }
    default:
      return state
  }
}
