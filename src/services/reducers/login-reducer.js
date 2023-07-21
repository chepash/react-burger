import {
  CLEAR_LOGIN_FORM_STATE,
  UPDATE_LOGIN_FORM_STATE,
  LOGIN_FORM_SUBMIT_REQUEST,
  LOGIN_FORM_SUBMIT_SUCCESS,
  LOGIN_FORM_SUBMIT_ERROR,
} from '../actions/login-actions'

const initialState = {
  form: {
    email: '',
    password: '',
  },
  response: null,
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_FORM_STATE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      }
    }
    case CLEAR_LOGIN_FORM_STATE: {
      return {
        ...state,
        form: initialState.form,
      }
    }
    case LOGIN_FORM_SUBMIT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case LOGIN_FORM_SUBMIT_ERROR:
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
