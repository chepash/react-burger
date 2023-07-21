import {
  CLEAR_PWD_RESET_FORM_STATE,
  UPDATE_PWD_RESET_FORM_STATE,
  PWD_RESET_FORM_SUBMIT_REQUEST,
  PWD_RESET_FORM_SUBMIT_SUCCESS,
  PWD_RESET_FORM_SUBMIT_ERROR,
} from '../actions/password-reset-actions'

const initialState = {
  form: {
    email: '',
    token: '',
  },
  response: null,
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PWD_RESET_FORM_STATE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      }
    }
    case CLEAR_PWD_RESET_FORM_STATE: {
      return {
        ...state,
        form: initialState.form,
      }
    }
    case PWD_RESET_FORM_SUBMIT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case PWD_RESET_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case PWD_RESET_FORM_SUBMIT_ERROR:
      return {
        ...state,
        response: null,
        error: true,
        isLoading: false,
      }
    default:
      return state
  }
}
