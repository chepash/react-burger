import {
  CLEAR_PROFILE_FORM_STATE,
  CLEAR_PROFILE_STATE,
  PROFILE_FORM_SUBMIT_FAILED,
  PROFILE_FORM_SUBMIT_REQUEST,
  PROFILE_FORM_SUBMIT_SUCCESS,
  TProfileActions,
  UPDATE_PROFILE_FORM_STATE,
} from '../actions/profile-actions'
import { TUserDataResponse } from '../types/data'

type TProfileState = {
  form: {
    name: string
    email: string
    password: string
  }
  response: TUserDataResponse | null
  isLoading: boolean
  isError: boolean | null
}

const initialState: TProfileState = {
  form: {
    name: '',
    email: '',
    password: '',
  },
  response: null,
  isLoading: false,
  isError: null,
}

export const profileReducer = (
  state = initialState,
  action: TProfileActions
) => {
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
    case PROFILE_FORM_SUBMIT_FAILED:
      return {
        ...state,
        response: null,
        error: true,
        isLoading: false,
      }
    default:
      const exhaustiveCheck: never = action
      return state
  }
}
