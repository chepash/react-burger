import { RootState } from '../types/store'

export const getIngredients = (store: RootState) =>
  store.ingredientsState.ingredients

export const getIngredientsState = (store: RootState) => store.ingredientsState
