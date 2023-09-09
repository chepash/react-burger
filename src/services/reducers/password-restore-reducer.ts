import {
  CLEAR_PWD_RESTORE_FORM_STATE,
  CLEAR_PWD_RESTORE_STATE,
  PWD_RESTORE_FORM_SUBMIT_FAILED,
  PWD_RESTORE_FORM_SUBMIT_REQUEST,
  PWD_RESTORE_FORM_SUBMIT_SUCCESS,
  TPwdRestoreActions,
  UPDATE_PWD_RESTORE_FORM_STATE,
} from '../actions/password-restore-actions'
import { TSendRecoveryEmailResponse } from '../types/data'

type TPasswordRestoreState = {
  form: {
    email: string
  }
  response: TSendRecoveryEmailResponse | null
  isLoading: boolean
  isError: boolean | null
}

export const initialState: TPasswordRestoreState = {
  form: {
    email: '',
  },
  response: null,
  isLoading: false,
  isError: null,
}

export const passwordRestoreReducer = (
  state = initialState,
  action: TPwdRestoreActions
) => {
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
    case CLEAR_PWD_RESTORE_STATE: {
      return {
        ...initialState,
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
    case PWD_RESTORE_FORM_SUBMIT_FAILED:
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
