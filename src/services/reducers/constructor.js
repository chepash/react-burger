import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../actions/constructor'
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
    default:
      return state
  }
}
