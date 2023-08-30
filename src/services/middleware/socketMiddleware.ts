import type { Middleware, MiddlewareAPI } from 'redux'

import {
  WS_CONNECTION_END,
  WS_CONNECTION_START,
  wsConnectionClosedAction,
  wsConnectionErrorAction,
  wsConnectionSuccessAction,
  wsGetMessageAction,
} from '../actions/ws-feed-actions'
import { AppDispatch, RootState, TAppActions } from '../types/store'
import { TFeedResponse } from '../types/ws-data'

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null

    return (next) => (action: TAppActions) => {
      const { dispatch } = store
      const { type } = action
      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(action.payload)
      }
      if (socket) {
        socket.onopen = () => {
          dispatch(wsConnectionSuccessAction())
        }

        socket.onerror = (event) => {
          dispatch(wsConnectionErrorAction(event))
        }

        socket.onmessage = (event) => {
          const { data } = event
          const parsedData: TFeedResponse = JSON.parse(data)
          dispatch(wsGetMessageAction(parsedData))
        }

        socket.onclose = () => {
          dispatch(wsConnectionClosedAction())
        }

        if (type === WS_CONNECTION_END) {
          socket.close()
          socket = null
        }
      }

      next(action)
    }
  }) as Middleware
}
