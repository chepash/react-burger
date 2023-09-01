import { RootState } from '../types/store'

export const getFeedOrders = (store: RootState) => store.feedState.orders
export const getFeedState = (store: RootState) => store.feedState
