import * as api from '../../utils/api'

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR'

export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE'
export const CLEAR_FORM_STATE = 'CLEAR_FORM_STATE'

// export const createOrder = () => (dispatch) => {
//   dispatch({ type: CREATE_ORDER_REQUEST })

//   return api
//     .sendPasswordRecoveryEmail(email)
//     .then((res) => {
//       dispatch({ type: EMPTY_CONSTRUCTOR })
//       return dispatch({ type: CREATE_ORDER_SUCCESS, payload: res })
//     })
//     .catch(() => {
//       return dispatch({ type: CREATE_ORDER_ERROR })
//     })
// }
