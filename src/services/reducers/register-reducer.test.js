import {
  CLEAR_REGISTER_FORM_STATE,
  CLEAR_REGISTER_STATE,
  REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_REQUEST,
  REGISTER_FORM_SUBMIT_SUCCESS,
  UPDATE_REGISTER_FORM_STATE,
} from '../actions/register-actions'
import { initialState, registerReducer } from './register-reducer'

describe('registerReducer', () => {
  it('should return the initial state', () => {
    const newState = registerReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle UPDATE_REGISTER_FORM_STATE', () => {
    const fieldName = 'name'
    const fieldValue = 'John Doe'
    const action = {
      type: UPDATE_REGISTER_FORM_STATE,
      payload: { field: fieldName, value: fieldValue },
    }
    const newState = registerReducer(initialState, action)

    expect(newState.form[fieldName]).toEqual(fieldValue)
  })

  it('should handle CLEAR_REGISTER_FORM_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'somePassword123',
      },
    }

    const action = { type: CLEAR_REGISTER_FORM_STATE }
    const newState = registerReducer(modifiedState, action)

    expect(newState.form).toEqual(initialState.form)
  })

  it('should handle CLEAR_REGISTER_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'somePassword123',
      },
      response: { token: 'someTokenValue123' },
      isLoading: true,
      isError: true,
    }

    const action = { type: CLEAR_REGISTER_STATE }
    const newState = registerReducer(modifiedState, action)

    expect(newState).toEqual(initialState)
  })

  it('should handle REGISTER_FORM_SUBMIT_REQUEST', () => {
    const action = { type: REGISTER_FORM_SUBMIT_REQUEST }
    const newState = registerReducer(initialState, action)

    expect(newState.isLoading).toBe(true)
  })

  it('should handle REGISTER_FORM_SUBMIT_SUCCESS', () => {
    const mockResponse = {
      success: true,
      accessToken: 'Bearer someTokenValue123',
      refreshToken: 'someTokenValue123',
      user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    }

    const action = {
      type: REGISTER_FORM_SUBMIT_SUCCESS,
      payload: mockResponse,
    }
    const newState = registerReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.response).toEqual(mockResponse)
  })

  it('should handle REGISTER_FORM_SUBMIT_FAILED', () => {
    const action = { type: REGISTER_FORM_SUBMIT_FAILED }
    const newState = registerReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.isError).toBe(true)
    expect(newState.response).toBe(null)
  })
})
