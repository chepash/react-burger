import {
  CLEAR_PWD_RESET_FORM_STATE,
  CLEAR_PWD_RESET_STATE,
  PWD_RESET_FORM_SUBMIT_FAILED,
  PWD_RESET_FORM_SUBMIT_REQUEST,
  PWD_RESET_FORM_SUBMIT_SUCCESS,
  UPDATE_PWD_RESET_FORM_STATE,
} from '../../utils/constants'
import { TPasswordResetResponse } from '../../utils/types'
import { TPwdResetActions } from '../actions/password-reset-actions'

type TPasswordResetState = {
  form: {
    password: string
    token: string
  }
  response: TPasswordResetResponse | null
  isLoading: boolean
  isError: boolean | null
  isPasswordVisible: boolean
}

const initialState = {
  form: {
    password: '',
    token: '',
  },
  response: null,
  isLoading: false,
  isError: null,
  isPasswordVisible: false,
}

export const reducer = (
  state: TPasswordResetState = initialState,
  action: TPwdResetActions
) => {
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
    case CLEAR_PWD_RESET_STATE: {
      return {
        ...initialState,
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
    case PWD_RESET_FORM_SUBMIT_FAILED:
      return {
        ...state,
        response: null,
        isError: true,
        isLoading: false,
      }
    default:
      return state
  }
}
