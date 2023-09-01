import { RootState } from '../types/store'

export const getIsLoggedIn = (store: RootState) => store.userState.isLoggedIn
export const getUser = (store: RootState) => store.userState.user
