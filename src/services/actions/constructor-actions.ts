import { v4 as uuidv4 } from 'uuid'
import { TIngredient, TIngredientWithUUID } from '../types/data'

export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const EMPTY_CONSTRUCTOR = 'EMPTY_CONSTRUCTOR'
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT'

interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT
  readonly payload: TIngredientWithUUID
}

interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT
  readonly payload: string
}

interface IEmptyConstructorAction {
  readonly type: typeof EMPTY_CONSTRUCTOR
}

interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT
  readonly payload: { fromIndex: number; toIndex: number }
}

export type TConstructorActions =
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IEmptyConstructorAction
  | IMoveIngredientAction

export const addIngredientAction = (
  ingredient: TIngredient
): IAddIngredientAction => {
  const ingredientWithUUID = { ingredient, uuid: uuidv4() }
  return {
    type: ADD_INGREDIENT,
    payload: ingredientWithUUID,
  }
}

export const deleteIngredientAction = (
  uuid: string
): IDeleteIngredientAction => {
  return {
    type: DELETE_INGREDIENT,
    payload: uuid,
  }
}

export const emptyConstructorAction = (): IEmptyConstructorAction => ({
  type: EMPTY_CONSTRUCTOR,
})

export const moveIngredientAction = (
  fromIndex: number,
  toIndex: number
): IMoveIngredientAction => ({
  type: MOVE_INGREDIENT,
  payload: { fromIndex, toIndex },
})
