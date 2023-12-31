import { TIngredient } from './data'

export enum OrderStatus {
  created = 'Принят',
  pending = 'Готовится',
  done = 'Выполнен',
}

export type TOrder = {
  _id: string
  ingredients: string[]
  status: 'created' | 'pending' | 'done'
  name: string
  createdAt: string
  updatedAt: string
  number: number
}

export type TFeedResponse = {
  success: boolean
  orders: TOrder[]
  total: number
  totalToday: number
  message?: string
}

export type TOrderIngredient = {
  ingredient: TIngredient
  amount: number
}

export type TOrderDetails = {
  originalOrderInfo: TOrder
  orderIngredients: TOrderIngredient[]
  orderSum: number
}
