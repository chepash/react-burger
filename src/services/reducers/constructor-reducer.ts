import { TConstructorActions } from '../actions/constructor-actions'
import defaultBun from '../../images/default-bun.svg'
import { TIngredientWithUUID } from '../../utils/types'
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  EMPTY_CONSTRUCTOR,
  MOVE_INGREDIENT,
} from '../../utils/constants'

export type TConstructorState = {
  constructorIngredients: TIngredientWithUUID[]
  constructorBun: {
    image_mobile: string
    name: string
    price: number
  }
}

const initialState = {
  constructorIngredients: [],
  constructorBun: {
    image_mobile: defaultBun,
    name: 'Добавьте булку',
    price: 0,
  },
}

export const reducer = (
  state: TConstructorState = initialState,
  action: TConstructorActions
): TConstructorState => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.ingredient.type === 'bun') {
        return {
          ...state,
          constructorBun: action.payload.ingredient,
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
          (ingredient) => ingredient.uuid !== action.payload
        ),
      }
    case EMPTY_CONSTRUCTOR:
      return {
        ...state,
        constructorIngredients: [],
        constructorBun: initialState.constructorBun,
      }
    case MOVE_INGREDIENT:
      const { fromIndex, toIndex } = action.payload
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
