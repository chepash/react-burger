import {
  PROFILE_FORM_SUBMIT_REQUEST,
  CLEAR_PROFILE_FORM_STATE,
  UPDATE_PROFILE_FORM_STATE,
  PROFILE_FORM_SUBMIT_SUCCESS,
  PROFILE_FORM_SUBMIT_ERROR,
} from '../actions/profile-actions'

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
