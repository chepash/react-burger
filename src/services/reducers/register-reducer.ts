import {
  CLEAR_REGISTER_FORM_STATE,
  CLEAR_REGISTER_STATE,
  REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_REQUEST,
  REGISTER_FORM_SUBMIT_SUCCESS,
  UPDATE_REGISTER_FORM_STATE,
} from '../../utils/constants'
import { TAuthResponse } from '../types/data'
import { TRegisterActions } from '../actions/register-actions'

type TRegisterState = {
  form: {
    name: string
    email: string
    password: string
  }
  response: TAuthResponse | null
  isLoading: boolean
  isError: boolean | null
}

const initialState: TRegisterState = {
  form: {
    name: '',
    email: '',
    password: '',
  },
  response: null,
  isLoading: false,
  isError: null,
}

export const registerReducer = (
  state = initialState,
  action: TRegisterActions
) => {
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
    case REGISTER_FORM_SUBMIT_FAILED:
      return {
        ...state,
        response: null,
        isError: true,
        isLoading: false,
      }
    default:
      const exhaustiveCheck: never = action
      return state
  }
}
