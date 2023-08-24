import {
  CLEAR_LOGIN_FORM_STATE,
  CLEAR_LOGIN_STATE,
  LOGIN_FORM_SUBMIT_FAILED,
  LOGIN_FORM_SUBMIT_REQUEST,
  LOGIN_FORM_SUBMIT_SUCCESS,
  UPDATE_LOGIN_FORM_STATE,
} from '../../utils/constants'
import { TAuthResponse } from '../../utils/types'
import { TLoginActions } from '../actions/login-actions'

type TLoginState = {
  form: {
    email: string
    password: string
  }
  response: TAuthResponse | null
  isLoading: boolean
  isError: boolean | null
  redirectPath: string
}

const initialState = {
  form: {
    email: '',
    password: '',
  },
  response: null,
  isLoading: false,
  isError: null,
  redirectPath: '',
}

export const reducer = (
  state: TLoginState = initialState,
  action: TLoginActions
) => {
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
    case CLEAR_LOGIN_STATE: {
      return {
        ...initialState,
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
    case LOGIN_FORM_SUBMIT_FAILED:
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
