import { RootState } from '../types/store'

export const getModalState = (store: RootState) => store.modalState

export const getCurrentIngredient = (store: RootState) =>
  store.modalState.currentIngredient

export const getCurrentOrderDetails = (store: RootState) =>
  store.modalState.currentOrderDetails
