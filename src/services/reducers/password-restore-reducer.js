import {
  CLEAR_PWD_RESTORE_FORM_STATE,
  UPDATE_PWD_RESTORE_FORM_STATE,
  PWD_RESTORE_FORM_SUBMIT_REQUEST,
  PWD_RESTORE_FORM_SUBMIT_SUCCESS,
  PWD_RESTORE_FORM_SUBMIT_ERROR,
} from '../actions/password-restore-actions'

const initialState = {
  form: {
    email: '',
  },
  response: null,
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PWD_RESTORE_FORM_STATE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      }
    }
    case CLEAR_PWD_RESTORE_FORM_STATE: {
      return {
        ...state,
        form: initialState.form,
      }
    }
    case PWD_RESTORE_FORM_SUBMIT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case PWD_RESTORE_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      }
    case PWD_RESTORE_FORM_SUBMIT_ERROR:
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
