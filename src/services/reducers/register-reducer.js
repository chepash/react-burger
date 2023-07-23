import {
  CLEAR_REGISTER_FORM_STATE,
  UPDATE_REGISTER_FORM_STATE,
  REGISTER_FORM_SUBMIT_REQUEST,
  REGISTER_FORM_SUBMIT_SUCCESS,
  REGISTER_FORM_SUBMIT_ERROR,
  CLEAR_REGISTER_STATE,
} from '../actions/register-actions'

const initialState = {
  form: {
    name: '',
    email: '',
    password: '',
  },
  response: null,
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REGISTER_FORM_STATE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      }
    }
    case CLEAR_REGISTER_FORM_STATE: {
      return {
        ...state,
        form: initialState.form,
      }
    }
    case CLEAR_REGISTER_STATE: {
      return {
        ...initialState,
      }
    }
    case REGISTER_FORM_SUBMIT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTER_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case REGISTER_FORM_SUBMIT_ERROR:
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
