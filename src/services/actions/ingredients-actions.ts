import * as api from '../../utils/api'
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from '../../utils/constants'
import { TIngredient } from '../../utils/types'

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS
  readonly payload: ReadonlyArray<TIngredient>
}

export interface IGetIngredientsFailedAction {
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
  ingredients: ReadonlyArray<TIngredient>
): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: ingredients,
})

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED,
})

//@ts-ignore
export const getAllIngredientsThunk = () => (dispatch) => {
  dispatch(getIngredientsAction())
  return api
    .fetchIngredients()
    .then((res) => {
      return dispatch(getIngredientsSuccessAction(res.data))
    })
    .catch(() => {
      return dispatch(getIngredientsFailedAction())
    })
}
