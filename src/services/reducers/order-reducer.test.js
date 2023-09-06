import {
  CLEAR_ORDER_STATE,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from '../actions/order-actions'
import { orderReducer } from './order-reducer'

describe('orderReducer', () => {
  const initialState = {
    response: null,
    isLoading: false,
    isError: null,
  }

  it('should return the initial state', () => {
    const newState = orderReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle CREATE_ORDER_REQUEST', () => {
    const action = { type: CREATE_ORDER_REQUEST }
    const newState = orderReducer(initialState, action)

    expect(newState.isLoading).toBe(true)
  })

  it('should handle CREATE_ORDER_SUCCESS', () => {
    const mockResponse = {
      success: true,
      name: 'orderName',
      order: { data: 'someData' },
    }

    const action = {
      type: CREATE_ORDER_SUCCESS,
      payload: mockResponse,
    }
    const newState = orderReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.response).toEqual(mockResponse)
  })

  it('should handle CREATE_ORDER_FAILED', () => {
    const action = { type: CREATE_ORDER_FAILED }
    const newState = orderReducer(initialState, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.isError).toBe(true)
    expect(newState.response).toBe(null)
  })

  it('should handle CLEAR_ORDER_STATE', () => {
    const modifiedState = {
      ...initialState,
      isLoading: true,
      response: {
        success: true,
        name: 'orderName',
        order: { data: 'someData' },
      },
      isError: true,
    }

    const action = { type: CLEAR_ORDER_STATE }
    const newState = orderReducer(modifiedState, action)

    expect(newState).toEqual(initialState)
  })
})
