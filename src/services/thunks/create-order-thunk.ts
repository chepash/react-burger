import * as api from '../../utils/api'
import { emptyConstructorAction } from '../actions/constructor-actions'
import {
  createOrderFailedAction,
  createOrderRequestAction,
  createOrderSuccessAction,
} from '../actions/order-actions'
import { TIngredient, TIngredientWithUUID } from '../types/data'
import { AppDispatch, AppThunk } from '../types/store'

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
      .placeNewOrder(ingredientsIds)
      .then((res) => {
        dispatch(emptyConstructorAction())
        return dispatch(createOrderSuccessAction(res))
      })
      .catch(() => {
        return dispatch(createOrderFailedAction())
      })
  }
