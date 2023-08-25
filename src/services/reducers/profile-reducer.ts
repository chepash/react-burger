import {
  CLEAR_PROFILE_FORM_STATE,
  CLEAR_PROFILE_STATE,
  PROFILE_FORM_SUBMIT_FAILED,
  PROFILE_FORM_SUBMIT_REQUEST,
  PROFILE_FORM_SUBMIT_SUCCESS,
  UPDATE_PROFILE_FORM_STATE,
} from '../../utils/constants'
import { TUserDataResponse } from '../../utils/types'
import { TProfileActions } from '../actions/profile-actions'

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

const initialState = {
  form: {
    name: '',
    email: '',
    password: '',
  },
  response: null,
  isLoading: false,
  isError: null,
}

export const reducer = (
  state: TProfileState = initialState,
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
  }

  const _exhaustiveCheck: never = action
}
