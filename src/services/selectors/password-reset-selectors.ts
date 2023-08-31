import { RootState } from '../types/store'

export const getPasswordResetFormData = (store: RootState) =>
  store.passwordResetState.form
