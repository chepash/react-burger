import { SUCCESSFUL_LOGOUT_MESSAGE } from '../../utils/constants'
import {
  CLEAR_USER_STATE,
  GET_USER_DATA_FAILED,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  SET_IS_LOGGED_IN,
  SET_USER_DATA,
} from '../actions/user-actions'
import { initialState, userReducer } from './user-reducer'

describe('userReducer', () => {
  it('should return the initial state', () => {
    const newState = userReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle GET_USER_DATA_REQUEST', () => {
    const action = { type: GET_USER_DATA_REQUEST }
    const newState = userReducer(initialState, action)

    expect(newState.isLoading).toBe(true)
  })

  it('should handle GET_USER_DATA_SUCCESS', () => {
    const mockResponse = {
      name: 'John Doe',
      email: 'johndoe@example.com',
    }

    const action = {
      type: GET_USER_DATA_SUCCESS,
      payload: mockResponse,
    }
    const newState = userReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.getUserResponse).toEqual(mockResponse)
  })

  it('should handle GET_USER_DATA_FAILED', () => {
    const action = { type: GET_USER_DATA_FAILED }
    const newState = userReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.isGetUserDataError).toBe(true)
    expect(newState.getUserResponse).toBe(null)
  })

  it('should handle LOGOUT_USER_REQUEST', () => {
    const action = { type: LOGOUT_USER_REQUEST }
    const newState = userReducer(initialState, action)

    expect(newState.isLoading).toBe(true)
  })

  it('should handle LOGOUT_USER_SUCCESS', () => {
    const mockResponse = {
      success: true,
      message: SUCCESSFUL_LOGOUT_MESSAGE,
    }

    const action = {
      type: LOGOUT_USER_SUCCESS,
      payload: mockResponse,
    }
    const newState = userReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.logoutResponse).toEqual(mockResponse)
  })

  it('should handle LOGOUT_USER_FAILED', () => {
    const action = { type: LOGOUT_USER_FAILED }
    const newState = userReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.isLogoutError).toBe(true)
    expect(newState.logoutResponse).toBe(null)
  })

  it('should handle SET_USER_DATA', () => {
    const mockUser = {
      name: 'John Doe',
      email: 'johndoe@example.com',
    }

    const action = {
      type: SET_USER_DATA,
      payload: mockUser,
    }
    const newState = userReducer(initialState, action)

    expect(newState.user).toEqual(mockUser)
  })

  it('should handle SET_IS_LOGGED_IN', () => {
    const action = {
      type: SET_IS_LOGGED_IN,
      payload: true,
    }
    const newState = userReducer(initialState, action)

    expect(newState.isLoggedIn).toBe(true)
  })

  it('should handle CLEAR_USER_STATE', () => {
    const modifiedState = {
      ...initialState,
      getUserResponse: { name: 'John Doe', email: 'johndoe@example.com' },
      isGetUserDataError: false,

      user: { name: 'John Doe', email: 'johndoe@example.com' },
      isLoggedIn: true,

      logoutResponse: null,
      isLogoutError: null,

      isLoading: false,
    }

    const action = { type: CLEAR_USER_STATE }
    const newState = userReducer(modifiedState, action)

    expect(newState).toEqual(initialState)
  })
})
