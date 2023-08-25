import {
  CLEAR_PWD_RESTORE_FORM_STATE,
  CLEAR_PWD_RESTORE_STATE,
  PWD_RESTORE_FORM_SUBMIT_FAILED,
  PWD_RESTORE_FORM_SUBMIT_REQUEST,
  PWD_RESTORE_FORM_SUBMIT_SUCCESS,
  UPDATE_PWD_RESTORE_FORM_STATE,
} from '../../utils/constants'
import { TSendRecoveryEmailResponse } from '../../utils/types'
import { TPwdRestoreActions } from '../actions/password-restore-actions'

type TPasswordRestoreState = {
  form: {
    email: string
  }
  response: TSendRecoveryEmailResponse | null
  isLoading: boolean
  isError: boolean | null
}

const initialState = {
  form: {
    email: '',
  },
  response: null,
  isLoading: false,
  isError: null,
}

export const reducer = (
  state: TPasswordRestoreState = initialState,
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
  }

  const _exhaustiveCheck: never = action
}
