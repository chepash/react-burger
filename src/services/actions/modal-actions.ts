import {
  SET_CURRENT_INGREDIENT,
  SET_IS_ERROR_MODAL_OPEN,
  SET_IS_INGREDIENT_MODAL_OPEN,
  SET_IS_ORDER_MODAL_OPEN,
} from '../../utils/constants'
import { TIngredient } from '../../utils/types'

export interface ISetCurrentIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT
  readonly payload: TIngredient | null
}
export interface ISetIsIngredientModalOpenAction {
  readonly type: typeof SET_IS_INGREDIENT_MODAL_OPEN
  readonly payload: boolean
}
export interface ISetIsOrderModalOpenAction {
  readonly type: typeof SET_IS_ORDER_MODAL_OPEN
  readonly payload: boolean
}
export interface ISetIsErrorModalOpenAction {
  readonly type: typeof SET_IS_ERROR_MODAL_OPEN
  readonly payload: boolean
}
export type TModalActions =
  | ISetCurrentIngredientAction
  | ISetIsIngredientModalOpenAction
  | ISetIsOrderModalOpenAction
  | ISetIsErrorModalOpenAction

export const setCurrentIngredientAction = (
  ingredient: TIngredient | null
): ISetCurrentIngredientAction => {
  return {
    type: SET_CURRENT_INGREDIENT,
    payload: ingredient,
  }
}
export const setIsIngredientModalOpenAction = (
  isOpen: boolean
): ISetIsIngredientModalOpenAction => {
  return {
    type: SET_IS_INGREDIENT_MODAL_OPEN,
    payload: isOpen,
  }
}
export const setIsOrderModalOpenAction = (
  isOpen: boolean
): ISetIsOrderModalOpenAction => {
  return {
    type: SET_IS_ORDER_MODAL_OPEN,
    payload: isOpen,
  }
}
export const setIsErrorModalOpenAction = (
  isOpen: boolean
): ISetIsErrorModalOpenAction => {
  return {
    type: SET_IS_ERROR_MODAL_OPEN,
    payload: isOpen,
  }
}
