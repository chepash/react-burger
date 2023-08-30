import type { Middleware, MiddlewareAPI } from 'redux'
import {
  AppDispatch,
  RootState,
  TAppActions,
  TWSStoreActions,
} from '../types/store'
import { TFeedResponse } from '../types/ws-data'
import * as api from '../../utils/api'
import { wsBaseUrl } from '../../utils/constants'
import { setIsErrorModalOpenAction } from '../actions/modal-actions'

export const socketMiddleware = (wsActions: TWSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null
    let isConnected = false
    let reconnectTimer = 0
    let url = ''

    const refreshToken = localStorage.getItem('refreshToken')

    return (next) => (action: TAppActions) => {
      const { wsConnect, wsDisconnect, onOpen, onClose, onError, onMessage } =
        wsActions

      const { dispatch } = store
      const { type } = action
      if (type === wsConnect) {
        url = action.payload
        socket = new WebSocket(url)
        isConnected = true
      }
      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen })
        }

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event })
        }

        socket.onmessage = (event) => {
          const { data } = event
          const parsedData: TFeedResponse = JSON.parse(data)

          if (
            refreshToken &&
            parsedData.message === 'Invalid or missing token'
          ) {
            console.log('parsedData.message : ', parsedData.message)
            api
              .fetchNewRefreshToken()
              .then((refreshTokenResponse) => {
                console.log('refreshTokenResponse : ', refreshTokenResponse)

                const newAccessToken = refreshTokenResponse.accessToken.replace(
                  'Bearer ',
                  ''
                )
                const newUrl = `${wsBaseUrl}?token=${newAccessToken}`
                console.log('newUrl : ', newUrl)
                dispatch({
                  type: wsConnect,
                  payload: newUrl,
                })
              })
              .catch((err) => {
                setIsErrorModalOpenAction(true)
                dispatch({ type: onError, payload: err })
              })

            dispatch({ type: onClose })

            return
          }

          dispatch({ type: onMessage, payload: parsedData })
        }

        socket.onclose = (event) => {
          if (event.code !== 1000) {
            console.log('error')
            dispatch({ type: onError, payload: event })
          }
          console.log('close')
          dispatch({ type: onClose })

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch({ type: wsConnect, payload: url })
            }, 3000)
          }
        }

        if (type === wsDisconnect) {
          console.log('disconnect')
          clearTimeout(reconnectTimer)
          isConnected = false
          reconnectTimer = 0
          socket.close()
          dispatch({ type: onClose })
          socket = null
        }
      }

      next(action)
    }
  }) as Middleware
}
