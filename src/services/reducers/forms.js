import { CLEAR_FORM_STATE, UPDATE_FORM_STATE } from '../actions/forms'

const initialState = {
  passwordRestoreForm: {
    email: '',
  },
  passwordResetForm: {
    password: '',
    code: '',
  },
  loginForm: {
    email: '',
    password: '',
  },
  registerForm: {
    name: '',
    email: '',
    password: '',
  },
  profileForm: {
    name: '',
    email: '',
    password: '',
  },
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_STATE: {
      return {
        ...state,
        [action.payload.form]: {
          ...state[action.payload.form],
          [action.payload.field]: action.payload.value,
        },
      }
    }
    case CLEAR_FORM_STATE: {
      return {
        ...state,
        [action.payload.form]: initialState[action.payload.form],
      }
    }
    default:
      return state
  }
}
