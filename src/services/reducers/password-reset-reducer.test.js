import { SUCCESSFUL_PASSWORD_RESET_MESSAGE } from '../../utils/constants'
import {
  CLEAR_PWD_RESET_FORM_STATE,
  CLEAR_PWD_RESET_STATE,
  PWD_RESET_FORM_SUBMIT_FAILED,
  PWD_RESET_FORM_SUBMIT_REQUEST,
  PWD_RESET_FORM_SUBMIT_SUCCESS,
  UPDATE_PWD_RESET_FORM_STATE,
} from '../actions/password-reset-actions'
import { passwordResetReducer } from './password-reset-reducer'

describe('passwordResetReducer', () => {
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

  it('should return the initial state', () => {
    const newState = passwordResetReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle UPDATE_PWD_RESET_FORM_STATE', () => {
    const field = 'password'
    const value = 'newPa$$w0rd'

    const newState = passwordResetReducer(initialState, {
      type: UPDATE_PWD_RESET_FORM_STATE,
      payload: {
        field,
        value,
      },
    })

    expect(newState.form[field]).toEqual(value)
  })

  it('should handle CLEAR_PWD_RESET_FORM_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        password: 'somePassword123',
        token: 'someTokenValue123',
      },
    }

    const newState = passwordResetReducer(modifiedState, {
      type: CLEAR_PWD_RESET_FORM_STATE,
    })

    expect(newState.form).toEqual(initialState.form)
  })

  it('should handle CLEAR_PWD_RESET_STATE', () => {
    const modifiedState = {
      form: {
        password: 'somePassword123',
        token: 'someTokenValue123',
      },
      response: {
        success: true,
        data: 'somedata',
      },
      isLoading: true,
      isError: true,
      isPasswordVisible: true,
    }

    const newState = passwordResetReducer(modifiedState, {
      type: CLEAR_PWD_RESET_STATE,
    })

    expect(newState).toEqual(initialState)
  })

  it('should handle PWD_RESET_FORM_SUBMIT_REQUEST', () => {
    const newState = passwordResetReducer(initialState, {
      type: PWD_RESET_FORM_SUBMIT_REQUEST,
    })

    expect(newState.isLoading).toEqual(true)
  })

  it('should handle PWD_RESET_FORM_SUBMIT_SUCCESS', () => {
    const mockResponse = {
      success: true,
      message: SUCCESSFUL_PASSWORD_RESET_MESSAGE,
    }

    const loadingState = {
      ...initialState,
      isLoading: true,
    }

    const newState = passwordResetReducer(loadingState, {
      type: PWD_RESET_FORM_SUBMIT_SUCCESS,
      payload: mockResponse,
    })

    expect(newState.isLoading).toEqual(false)
    expect(newState.response).toEqual(mockResponse)
  })

  it('should handle PWD_RESET_FORM_SUBMIT_FAILED', () => {
    const loadingState = {
      ...initialState,
      isLoading: true,
    }

    const newState = passwordResetReducer(loadingState, {
      type: PWD_RESET_FORM_SUBMIT_FAILED,
    })

    expect(newState.isLoading).toEqual(false)
    expect(newState.isError).toEqual(true)
    expect(newState.response).toEqual(null)
  })
})
