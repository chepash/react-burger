import { TPlaceNewOrderResponse } from '../types/data'

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED'
export const CLEAR_ORDER_STATE = 'CLEAR_ORDER_STATE'

interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST
}
interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS
  readonly payload: TPlaceNewOrderResponse
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
  placeOrderResponse: TPlaceNewOrderResponse
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
