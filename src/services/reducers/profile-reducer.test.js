import {
  CLEAR_PROFILE_FORM_STATE,
  CLEAR_PROFILE_STATE,
  PROFILE_FORM_SUBMIT_FAILED,
  PROFILE_FORM_SUBMIT_REQUEST,
  PROFILE_FORM_SUBMIT_SUCCESS,
  UPDATE_PROFILE_FORM_STATE,
} from '../actions/profile-actions'
import { profileReducer } from './profile-reducer' // Import your reducer and initialState

describe('profileReducer', () => {
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

  it('should return the initial state', () => {
    const newState = profileReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle UPDATE_PROFILE_FORM_STATE', () => {
    const fieldName = 'name'
    const fieldValue = 'John Doe'
    const action = {
      type: UPDATE_PROFILE_FORM_STATE,
      payload: { field: fieldName, value: fieldValue },
    }
    const newState = profileReducer(initialState, action)

    expect(newState.form[fieldName]).toEqual(fieldValue)
  })

  it('should handle CLEAR_PROFILE_FORM_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'somePassword123',
      },
    }

    const action = { type: CLEAR_PROFILE_FORM_STATE }
    const newState = profileReducer(modifiedState, action)

    expect(newState.form).toEqual(initialState.form)
  })

  it('should handle CLEAR_PROFILE_STATE', () => {
    const modifiedState = {
      ...initialState,
      form: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'somePassword123',
      },
      response: {
        success: true,
        data: 'somedata',
      },
      isLoading: true,
      isError: true,
    }

    const action = { type: CLEAR_PROFILE_STATE }
    const newState = profileReducer(modifiedState, action)

    expect(newState).toEqual(initialState)
  })

  it('should handle PROFILE_FORM_SUBMIT_REQUEST', () => {
    const action = { type: PROFILE_FORM_SUBMIT_REQUEST }
    const newState = profileReducer(initialState, action)

    expect(newState.isLoading).toBe(true)
  })

  it('should handle PROFILE_FORM_SUBMIT_SUCCESS', () => {
    const mockResponse = {
      success: true,
      user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    }

    const action = {
      type: PROFILE_FORM_SUBMIT_SUCCESS,
      payload: mockResponse,
    }
    const newState = profileReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.response).toEqual(mockResponse)
  })

  it('should handle PROFILE_FORM_SUBMIT_FAILED', () => {
    const action = { type: PROFILE_FORM_SUBMIT_FAILED }
    const newState = profileReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.isError).toBe(true)
    expect(newState.response).toBe(null)
  })
})
