import { v4 as uuidv4 } from 'uuid'

export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const EMPTY_CONSTRUCTOR = 'EMPTY_CONSTRUCTOR'
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT'

export const addIngredient = (ingredient) => {
  const ingredientWithUUID = { ...ingredient, uuid: uuidv4() }
  return {
    type: ADD_INGREDIENT,
    payload: ingredientWithUUID,
  }
}

export const deleteIngredient = (uuid) => {
  return {
    type: DELETE_INGREDIENT,
    payload: uuid,
  }
}
