import * as api from '../../utils/api'
import {
  CLEAR_ORDER_STATE,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from '../../utils/constants'
import {
  TIngredient,
  TIngredientWithUUID,
  TPlaceOrderResponse,
} from '../../utils/types'
import { emptyConstructorAction } from './constructor-actions'

export interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST
}
export interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS
  readonly payload: TPlaceOrderResponse
}
export interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED
}
export interface IClearOrderStateAction {
  readonly type: typeof CLEAR_ORDER_STATE
}
export type TOrderActions =
  | ICreateOrderRequestAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailedAction
  | IClearOrderStateAction

// Define action creators
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
  ) =>
  //@ts-ignore
  (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST })

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
