import * as api from '../../utils/api'
import {
  CLEAR_ORDER_STATE,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from '../../utils/constants'
import { AppDispatch, AppThunk } from '../types'
import {
  TIngredient,
  TIngredientWithUUID,
  TPlaceOrderResponse,
} from '../types/data'
import { emptyConstructorAction } from './constructor-actions'

interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST
}
interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS
  readonly payload: TPlaceOrderResponse
}
interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED
}
interface IClearOrderStateAction {
  readonly type: typeof CLEAR_ORDER_STATE
}
export type TOrderActions =
  | ICreateOrderRequestAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailedAction
  | IClearOrderStateAction

export const createOrderRequestAction = (): ICreateOrderRequestAction => {
  return {
    type: CREATE_ORDER_REQUEST,
  }
}

export const createOrderSuccessAction = (
  placeOrderResponse: TPlaceOrderResponse
): ICreateOrderSuccessAction => {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: placeOrderResponse,
  }
}

export const createOrderFailedAction = (): ICreateOrderFailedAction => {
  return {
    type: CREATE_ORDER_FAILED,
  }
}

export const clearOrderStateAction = (): IClearOrderStateAction => {
  return {
    type: CLEAR_ORDER_STATE,
  }
}

export const createOrderThunk =
  (
    constructorIngredients: TIngredientWithUUID[],
    constructorBun: TIngredient
  ): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(createOrderRequestAction())

    const bunId = constructorBun._id

    const constructorIngredientsIds = constructorIngredients.map(
      (ingredientWithUUID) => ingredientWithUUID.ingredient._id
    )

    const ingredientsIds = [bunId, ...constructorIngredientsIds, bunId]

    return api
      .placeOrder(ingredientsIds)
      .then((res) => {
        dispatch(emptyConstructorAction())
        return dispatch(createOrderSuccessAction(res))
      })
      .catch(() => {
        return dispatch(createOrderFailedAction())
      })
  }
