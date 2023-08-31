import { RootState } from '../types/store'

export const getPasswordRestoreFormData = (store: RootState) =>
  store.passwordRestoreState.form

export const getIsEmailSent = (store: RootState) =>
  store.passwordRestoreState.response?.success
