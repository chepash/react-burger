import {
  WS_CLEAN_USER_HISTORY_STATE,
  WS_USER_HISTORY_CONNECTION_CLOSED,
  WS_USER_HISTORY_CONNECTION_ERROR,
  WS_USER_HISTORY_CONNECTION_SUCCESS,
  WS_USER_HISTORY_GET_MESSAGE,
} from '../actions/ws-user-history-actions'
import { initialState, wsUserHistoryReducer } from './ws-user-history-reducer'

describe('wsUserHistoryReducer', () => {
  it('should return the initial state', () => {
    const newState = wsUserHistoryReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle WS_USER_HISTORY_CONNECTION_SUCCESS', () => {
    const action = { type: WS_USER_HISTORY_CONNECTION_SUCCESS }
    const newState = wsUserHistoryReducer(initialState, action)

    expect(newState.wsConnected).toBe(true)
    expect(newState.error).toBe(null)
  })

  it('should handle WS_USER_HISTORY_CONNECTION_ERROR', () => {
    const mockError = new Event('WebSocket error')
    const action = {
      type: WS_USER_HISTORY_CONNECTION_ERROR,
      payload: mockError,
    }
    const newState = wsUserHistoryReducer(initialState, action)

    expect(newState.wsConnected).toBe(false)
    expect(newState.error).toEqual(mockError)
  })

  it('should handle WS_USER_HISTORY_CONNECTION_CLOSED', () => {
    const action = { type: WS_USER_HISTORY_CONNECTION_CLOSED }
    const newState = wsUserHistoryReducer(initialState, action)

    expect(newState.wsConnected).toBe(false)
    expect(newState.error).toBe(null)
  })

  it('should handle WS_USER_HISTORY_GET_MESSAGE', () => {
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
      type: WS_USER_HISTORY_GET_MESSAGE,
      payload: {
        orders: mockOrders,
        total: 2,
        totalToday: 1,
      },
    }
    const newState = wsUserHistoryReducer(initialState, action)

    expect(newState.orders).toEqual(mockOrders)
    expect(newState.total).toBe(2)
    expect(newState.totalToday).toBe(1)
  })

  it('should handle WS_CLEAN_USER_HISTORY_STATE', () => {
    const modifiedState = {
      ...initialState,
      wsConnected: true,
      orders: [
        {
          _id: '1',
          status: 'pending',
        },
        {
          _id: '2',
          status: 'done',
        },
      ],
      total: 1,
      totalToday: 1,
      error: new Event('WebSocket error'),
    }

    const action = { type: WS_CLEAN_USER_HISTORY_STATE }
    const newState = wsUserHistoryReducer(modifiedState, action)

    expect(newState).toEqual(initialState)
  })
})
