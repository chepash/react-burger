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
import { TWSActions } from '../actions/ws-feed-actions'

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
  | TWSActions

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
