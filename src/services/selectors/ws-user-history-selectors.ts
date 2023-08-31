import { RootState } from '../types/store'

export const getUserOrdersHistory = (store: RootState) =>
  store.userHistoryState.orders
