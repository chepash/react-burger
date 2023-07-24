import {
  CLEAR_PROFILE_FORM_STATE,
  CLEAR_PROFILE_STATE,
  PROFILE_FORM_SUBMIT_ERROR,
  PROFILE_FORM_SUBMIT_REQUEST,
  PROFILE_FORM_SUBMIT_SUCCESS,
  UPDATE_PROFILE_FORM_STATE,
} from '../actions/profile-actions'

const initialState = {
  form: {
    name: '',
    email: '',
    password: '',
  },
  changedInputs: {},
  response: null,
  isLoading: false,
  error: null,
  isPasswordVisible: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_FORM_STATE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      }
    }
    case CLEAR_PROFILE_FORM_STATE: {
      return {
        ...state,
        form: initialState.form,
      }
    }
    case CLEAR_PROFILE_STATE: {
      return {
        ...initialState,
      }
    }
    case PROFILE_FORM_SUBMIT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case PROFILE_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case PROFILE_FORM_SUBMIT_ERROR:
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
