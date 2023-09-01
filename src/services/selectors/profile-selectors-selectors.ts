import { RootState } from '../types/store'

export const getProfileFormData = (store: RootState) => store.profileState.form
