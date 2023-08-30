import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from '../../utils/constants'
import { TIngredient } from '../types/data'

interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST
}
interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS
  readonly payload: TIngredient[]
}
interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED
}

export type TIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction

export const getIngredientsAction = (): IGetIngredientsAction => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  }
}

export const getIngredientsSuccessAction = (
  ingredients: TIngredient[]
): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: ingredients,
})

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED,
})
