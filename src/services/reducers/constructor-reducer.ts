import { TConstructorActions } from '../actions/constructor-actions'
import defaultBun from '../../images/default-bun.svg'
import { TIngredient, TIngredientWithUUID } from '../types/data'
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  EMPTY_CONSTRUCTOR,
  MOVE_INGREDIENT,
} from '../../utils/constants'

export type TConstructorState = {
  constructorIngredients: TIngredientWithUUID[]
  constructorBun: TIngredient
}

const initialState: TConstructorState = {
  constructorIngredients: [],
  constructorBun: {
    _id: '',
    name: 'Добавьте булку',
    type: 'bun',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: defaultBun,
    image_mobile: defaultBun,
    image_large: defaultBun,
    __v: 0,
  },
}

export const constructorReducer = (
  state = initialState,
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
      const exhaustiveCheck: never = action
      return state
  }
}
