import * as api from '../../utils/api'
import {
  getIngredientsAction,
  getIngredientsFailedAction,
  getIngredientsSuccessAction,
} from '../actions/ingredients-actions'
import { AppDispatch, AppThunk } from '../types/store'

export const getAllIngredientsThunk =
  (): AppThunk => (dispatch: AppDispatch) => {
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
