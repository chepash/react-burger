import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
} from '../actions/constructor'
import defaultBun from '../../images/default-bun.svg'

const initialState = {
  constructorIngredients: [],
  constructorBun: {
    image_mobile: defaultBun,
    name: 'Выберите тип булки',
    price: 0,
  },
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === 'bun') {
        return {
          ...state,
          constructorBun: action.payload,
        }
      }

      const constructorIngredients = state.constructorIngredients?.length
        ? [...state.constructorIngredients, action.payload]
        : [action.payload]
      return {
        ...state,
        constructorIngredients,
      }
    case DELETE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter(
          // @ts-ignore
          (ingredient) => ingredient.uuid !== action.payload
        ),
      }
    case MOVE_INGREDIENT:
      const { fromIndex, toIndex } = action.payload
      console.log('fromIndex : ', fromIndex)
      console.log('toIndex : ', toIndex)
      const ingredients = [...state.constructorIngredients]

      ingredients.splice(toIndex, 0, ingredients.splice(fromIndex, 1)[0])
      return {
        ...state,
        constructorIngredients: ingredients,
      }

    default:
      return state
  }
}
