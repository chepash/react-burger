import {
  CLEAR_LOGIN_FORM_STATE,
  CLEAR_LOGIN_STATE,
  LOGIN_FORM_SUBMIT_FAILED,
  LOGIN_FORM_SUBMIT_REQUEST,
  LOGIN_FORM_SUBMIT_SUCCESS,
  UPDATE_LOGIN_FORM_STATE,
} from '../actions/login-actions'
import { loginReducer } from './login-reducer'

describe('loginReducer', () => {
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

  it('should return the initial state', () => {
    const newState = loginReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle UPDATE_LOGIN_FORM_STATE', () => {
    const fieldName = 'email'
    const fieldValue = 'johndoe@example.com'
    const action = {
      type: UPDATE_LOGIN_FORM_STATE,
      payload: { field: fieldName, value: fieldValue },
    }
    const newState = loginReducer(initialState, action)

    expect(newState.form[fieldName]).toEqual(fieldValue)
  })

  it('should handle CLEAR_LOGIN_FORM_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        email: 'johndoe@example.com',
        password: 'somePassword123',
      },
    }

    const action = { type: CLEAR_LOGIN_FORM_STATE }
    const newState = loginReducer(modifiedState, action)

    expect(newState.form).toEqual(initialState.form)
  })

  it('should handle CLEAR_LOGIN_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        email: 'johndoe@example.com',
        password: 'somePassword123',
      },
      response: { data: 'someData' },
      isLoading: true,
      isError: true,
      redirectPath: '/some_route',
    }

    const action = { type: CLEAR_LOGIN_STATE }
    const newState = loginReducer(modifiedState, action)

    expect(newState).toEqual(initialState)
  })

  it('should handle LOGIN_FORM_SUBMIT_REQUEST', () => {
    const action = { type: LOGIN_FORM_SUBMIT_REQUEST }
    const newState = loginReducer(initialState, action)

    expect(newState.isLoading).toBe(true)
  })

  it('should handle LOGIN_FORM_SUBMIT_SUCCESS', () => {
    const mockResponse = {
      success: true,
      accessToken: 'Bearer token123',
      refreshToken: 'token123',
      user: {
        email: 'johndoe@example.com',
        password: 'somePassword123',
      },
    }

    const action = {
      type: LOGIN_FORM_SUBMIT_SUCCESS,
      payload: mockResponse,
    }
    const newState = loginReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.response).toEqual(mockResponse)
  })

  it('should handle LOGIN_FORM_SUBMIT_FAILED', () => {
    const action = { type: LOGIN_FORM_SUBMIT_FAILED }
    const newState = loginReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.isError).toBe(true)
    expect(newState.response).toBe(null)
  })
})
