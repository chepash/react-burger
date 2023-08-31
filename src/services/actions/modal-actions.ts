import { TIngredient } from '../types/data'
import { TOrderDetails } from '../types/ws-data'

export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT'
export const SET_IS_INGREDIENT_MODAL_OPEN = 'SET_IS_INGREDIENT_MODAL_OPEN'
export const SET_IS_PLACED_NEW_ORDER_MODAL_OPEN =
  'SET_IS_PLACED_NEW_ORDER_MODAL_OPEN'
export const SET_CURRENT_ORDER_DETAILS = 'SET_CURRENT_ORDER_DETAILS'
export const SET_IS_ORDER_DETAILS_MODAL_OPEN = 'SET_IS_ORDER_DETAILS_MODAL_OPEN'
export const SET_IS_ERROR_MODAL_OPEN = 'SET_IS_ERROR_MODAL_OPEN'

interface ISetCurrentIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT
  readonly payload: TIngredient | null
}
interface ISetCurrentOrderDetailsAction {
  readonly type: typeof SET_CURRENT_ORDER_DETAILS
  readonly payload: TOrderDetails | null
}
interface ISetIsIngredientModalOpenAction {
  readonly type: typeof SET_IS_INGREDIENT_MODAL_OPEN
  readonly payload: boolean
}
interface ISetIsPlacedNewOrderModalOpenAction {
  readonly type: typeof SET_IS_PLACED_NEW_ORDER_MODAL_OPEN
  readonly payload: boolean
}
interface ISetIsOrderDetailsModalOpenAction {
  readonly type: typeof SET_IS_ORDER_DETAILS_MODAL_OPEN
  readonly payload: boolean
}
interface ISetIsErrorModalOpenAction {
  readonly type: typeof SET_IS_ERROR_MODAL_OPEN
  readonly payload: boolean
}
export type TModalActions =
  | ISetCurrentIngredientAction
  | ISetCurrentOrderDetailsAction
  | ISetIsPlacedNewOrderModalOpenAction
  | ISetIsIngredientModalOpenAction
  | ISetIsOrderDetailsModalOpenAction
  | ISetIsErrorModalOpenAction

export const setCurrentIngredientAction = (
  ingredient: TIngredient | null
): ISetCurrentIngredientAction => {
  return {
    type: SET_CURRENT_INGREDIENT,
    payload: ingredient,
  }
}
export const setCurrentOrderDetailsAction = (
  currentOrderDetails: TOrderDetails | null
): ISetCurrentOrderDetailsAction => {
  return {
    type: SET_CURRENT_ORDER_DETAILS,
    payload: currentOrderDetails,
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
export const setIsPlacedNewOrderModalOpenAction = (
  isOpen: boolean
): ISetIsPlacedNewOrderModalOpenAction => {
  return {
    type: SET_IS_PLACED_NEW_ORDER_MODAL_OPEN,
    payload: isOpen,
  }
}
export const setIsOrderDetailsModalOpenAction = (
  isOpen: boolean
): ISetIsOrderDetailsModalOpenAction => {
  return {
    type: SET_IS_ORDER_DETAILS_MODAL_OPEN,
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
