import { SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE } from '../../utils/constants'
import {
  CLEAR_PWD_RESTORE_FORM_STATE,
  CLEAR_PWD_RESTORE_STATE,
  PWD_RESTORE_FORM_SUBMIT_FAILED,
  PWD_RESTORE_FORM_SUBMIT_REQUEST,
  PWD_RESTORE_FORM_SUBMIT_SUCCESS,
  UPDATE_PWD_RESTORE_FORM_STATE,
} from '../actions/password-restore-actions'
import {
  initialState,
  passwordRestoreReducer,
} from './password-restore-reducer'

describe('passwordRestoreReducer', () => {
  it('should return the initial state', () => {
    const newState = passwordRestoreReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle UPDATE_PWD_RESTORE_FORM_STATE', () => {
    const field = 'email'
    const value = 'test@example.com'

    const newState = passwordRestoreReducer(initialState, {
      type: UPDATE_PWD_RESTORE_FORM_STATE,
      payload: {
        field,
        value,
      },
    })

    expect(newState.form[field]).toEqual(value)
  })

  it('should handle CLEAR_PWD_RESTORE_FORM_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        email: 'test@example.com',
      },
    }

    const newState = passwordRestoreReducer(modifiedState, {
      type: CLEAR_PWD_RESTORE_FORM_STATE,
    })

    expect(newState.form).toEqual(initialState.form)
  })

  it('should handle CLEAR_PWD_RESTORE_STATE', () => {
    const modifiedState = {
      ...initialState,
      response: { success: true },
      isLoading: true,
    }

    const newState = passwordRestoreReducer(modifiedState, {
      type: CLEAR_PWD_RESTORE_STATE,
    })

    expect(newState).toEqual(initialState)
  })

  it('should handle PWD_RESTORE_FORM_SUBMIT_REQUEST', () => {
    const newState = passwordRestoreReducer(initialState, {
      type: PWD_RESTORE_FORM_SUBMIT_REQUEST,
    })

    expect(newState.isLoading).toEqual(true)
  })

  it('should handle PWD_RESTORE_FORM_SUBMIT_SUCCESS', () => {
    const mockResponse = {
      success: true,
      message: SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE,
    }

    const loadingState = {
      ...initialState,
      isLoading: true,
    }

    const newState = passwordRestoreReducer(loadingState, {
      type: PWD_RESTORE_FORM_SUBMIT_SUCCESS,
      payload: mockResponse,
    })

    expect(newState.isLoading).toEqual(false)
    expect(newState.response).toEqual(mockResponse)
  })

  it('should handle PWD_RESTORE_FORM_SUBMIT_FAILED', () => {
    const loadingState = {
      ...initialState,
      isLoading: true,
    }

    const newState = passwordRestoreReducer(loadingState, {
      type: PWD_RESTORE_FORM_SUBMIT_FAILED,
    })

    expect(newState.isLoading).toEqual(false)
    expect(newState.isError).toEqual(true)
    expect(newState.response).toEqual(null)
  })
})
