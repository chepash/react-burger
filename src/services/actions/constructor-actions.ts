import { v4 as uuidv4 } from 'uuid'
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  EMPTY_CONSTRUCTOR,
  MOVE_INGREDIENT,
} from '../../utils/constants'
import { TIngredient, TIngredientWithUUID } from '../../utils/types'

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT
  readonly payload: TIngredientWithUUID
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT
  readonly payload: string
}

export interface IEmptyConstructorAction {
  readonly type: typeof EMPTY_CONSTRUCTOR
}

export interface IMoveIngredientAction {
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
