import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
} from '../actions/ws-feed-actions'
import { wsFeedReducer } from './ws-feed-reducer'

describe('wsFeedReducer', () => {
  const initialState = {
    wsConnected: false,

    orders: [],
    total: 0,
    totalToday: 0,

    error: null,
  }

  it('should return the initial state', () => {
    const newState = wsFeedReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle WS_FEED_CONNECTION_SUCCESS', () => {
    const action = { type: WS_FEED_CONNECTION_SUCCESS }
    const newState = wsFeedReducer(initialState, action)

    expect(newState.wsConnected).toBe(true)
    expect(newState.error).toBe(null)
  })

  it('should handle WS_FEED_CONNECTION_ERROR', () => {
    const mockError = new Event('WebSocket error')
    const action = {
      type: WS_FEED_CONNECTION_ERROR,
      payload: mockError,
    }
    const newState = wsFeedReducer(initialState, action)

    expect(newState.wsConnected).toBe(false)
    expect(newState.error).toEqual(mockError)
  })

  it('should handle WS_FEED_CONNECTION_CLOSED', () => {
    const action = { type: WS_FEED_CONNECTION_CLOSED }
    const newState = wsFeedReducer(initialState, action)

    expect(newState.wsConnected).toBe(false)
    expect(newState.error).toBe(null)
  })

  it('should handle WS_FEED_GET_MESSAGE', () => {
    const mockOrders = [
      {
        _id: '1',
        status: 'pending',
      },
      {
        _id: '2',
        status: 'done',
      },
    ]

    const action = {
      type: WS_FEED_GET_MESSAGE,
      payload: {
        orders: mockOrders,
        total: 2,
        totalToday: 1,
      },
    }
    const newState = wsFeedReducer(initialState, action)

    expect(newState.orders).toEqual(mockOrders)
    expect(newState.total).toBe(2)
    expect(newState.totalToday).toBe(1)
  })
})
