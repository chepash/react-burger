import { RootState } from '../types/store'

export const getLoginFormData = (store: RootState) => store.loginState.form
