import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux'
import type { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { store } from '../..'
import { TConstructorActions } from '../actions/constructor-actions'
import { TIngredientsActions } from '../actions/ingredients-actions'
import { TLoginActions } from '../actions/login-actions'
import { TModalActions } from '../actions/modal-actions'
import { TOrderActions } from '../actions/order-actions'
import { TPwdResetActions } from '../actions/password-reset-actions'
import { TPwdRestoreActions } from '../actions/password-restore-actions'
import { TProfileActions } from '../actions/profile-actions'
import { TRegisterActions } from '../actions/register-actions'
import { TUserActions } from '../actions/user-actions'
import {
  TWSFeedActions,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_END,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
} from '../actions/ws-feed-actions'
import {
  TWSUserHistoryActions,
  WS_USER_HISTORY_CONNECTION_CLOSED,
  WS_USER_HISTORY_DISCONNECT,
  WS_USER_HISTORY_CONNECTION_ERROR,
  WS_USER_HISTORY_CONNECT,
  WS_USER_HISTORY_CONNECTION_SUCCESS,
  WS_USER_HISTORY_GET_MESSAGE,
} from '../actions/ws-user-history-actions'

export type TAppActions =
  | TConstructorActions
  | TIngredientsActions
  | TLoginActions
  | TModalActions
  | TOrderActions
  | TPwdResetActions
  | TPwdRestoreActions
  | TProfileActions
  | TRegisterActions
  | TUserActions
  | TWSFeedActions
  | TWSUserHistoryActions

export type TWSStoreFeedActions = {
  wsConnect: typeof WS_FEED_CONNECTION_START
  wsDisconnect: typeof WS_FEED_CONNECTION_END
  onOpen: typeof WS_FEED_CONNECTION_SUCCESS
  onClose: typeof WS_FEED_CONNECTION_CLOSED
  onError: typeof WS_FEED_CONNECTION_ERROR
  onMessage: typeof WS_FEED_GET_MESSAGE
}

export type TWSStoreUserFeedActions = {
  wsConnect: typeof WS_USER_HISTORY_CONNECT
  wsDisconnect: typeof WS_USER_HISTORY_DISCONNECT
  onOpen: typeof WS_USER_HISTORY_CONNECTION_SUCCESS
  onClose: typeof WS_USER_HISTORY_CONNECTION_CLOSED
  onError: typeof WS_USER_HISTORY_CONNECTION_ERROR
  onMessage: typeof WS_USER_HISTORY_GET_MESSAGE
}

export type TWSStoreActions = TWSStoreFeedActions | TWSStoreUserFeedActions

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TAppActions
>

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
