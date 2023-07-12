import * as api from '../../utils/api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR'

export const IGNORE_INGREDIENTS_ERROR = 'IGNORE_INGREDIENTS_ERROR'

export const getAllIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST })
  return api
    .fetchIngredients()
    .then((res) => {
      return dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: res.data })
    })
    .catch(() => {
      return dispatch({ type: GET_INGREDIENTS_ERROR })
    })
}
