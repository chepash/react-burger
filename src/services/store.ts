import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_END,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
} from './actions/ws-feed-actions'
import {
  WS_USER_HISTORY_CONNECTION_CLOSED,
  WS_USER_HISTORY_DISCONNECT,
  WS_USER_HISTORY_CONNECTION_ERROR,
  WS_USER_HISTORY_CONNECT,
  WS_USER_HISTORY_CONNECTION_SUCCESS,
  WS_USER_HISTORY_GET_MESSAGE,
} from './actions/ws-user-history-actions'
import { socketMiddleware } from './middleware/socketMiddleware'
import { rootReducer } from './rootReducer'
import { TWSStoreFeedActions, TWSStoreUserFeedActions } from './types/store'

const wsFeedActions: TWSStoreFeedActions = {
  wsConnect: WS_FEED_CONNECTION_START,
  wsDisconnect: WS_FEED_CONNECTION_END,
  onOpen: WS_FEED_CONNECTION_SUCCESS,
  onError: WS_FEED_CONNECTION_ERROR,
  onClose: WS_FEED_CONNECTION_CLOSED,
  onMessage: WS_FEED_GET_MESSAGE,
}

const wsUserFeedActions: TWSStoreUserFeedActions = {
  wsConnect: WS_USER_HISTORY_CONNECT,
  wsDisconnect: WS_USER_HISTORY_DISCONNECT,
  onOpen: WS_USER_HISTORY_CONNECTION_SUCCESS,
  onError: WS_USER_HISTORY_CONNECTION_ERROR,
  onClose: WS_USER_HISTORY_CONNECTION_CLOSED,
  onMessage: WS_USER_HISTORY_GET_MESSAGE,
}

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        socketMiddleware(wsFeedActions),
        socketMiddleware(wsUserFeedActions)
      )
    )
  )

  return store
}
