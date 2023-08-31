import { RootState } from '../types/store'

export const getRegisterFormData = (store: RootState) =>
  store.registerState.form
