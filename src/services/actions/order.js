import * as api from '../../utils/api'
import { EMPTY_CONSTRUCTOR } from './constructor'

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR'
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL'
export const IGNORE_ORDER_ERROR = 'IGNORE_ORDER_ERROR'

export const createOrder =
  (constructorIngredients, constructorBun) => (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST })

    const bunId = constructorBun._id

    const constructorIngredientsIds = constructorIngredients.map(
      (ingredient) => ingredient._id
    )

    const ingredientsIds = [bunId, ...constructorIngredientsIds, bunId]

    return api
      .placeOrder(ingredientsIds)
      .then((res) => {
        dispatch({ type: EMPTY_CONSTRUCTOR })
        return dispatch({ type: CREATE_ORDER_SUCCESS, payload: res })
      })
      .catch(() => {
        return dispatch({ type: CREATE_ORDER_ERROR })
      })
  }
