import {
  SUCCESSFUL_LOGOUT_MESSAGE,
  SUCCESSFUL_PASSWORD_RESET_MESSAGE,
  SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE,
} from './constants'

export type TIngredientsCategory = 'bun' | 'sauce' | 'main'

export type TIngredient = {
  _id: string
  name: string
  type: TIngredientsCategory
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  __v: number
}

export type TIngredientWithUUID = {
  ingredient: TIngredient
  uuid: string
}

export type TOwner = {
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export type TOrder = {
  _id: string
  ingredients: TIngredient[]
  owner: TOwner
  status: string
  name: string
  createdAt: string
  updatedAt: string
  number: number
  price: number
}

type TUser = {
  email: string
  name: string
}

export type TErrorResponse = {
  status: string
  message: string
}

type TBaseApiResponse = {
  success: boolean
}

// Тело ответа сервера при успешном обновлении токена:
// {
//   "success": true,
//   "accessToken": "Bearer ...",
//   "refreshToken": ""
// }
export type TRefreshTokenResponse = TBaseApiResponse & {
  accessToken: string
  refreshToken: string
}

// Тело ответа сервера при успешной авторизации:
// {
//   "success": true,
//   "accessToken": "Bearer ...",
//   "refreshToken": "",
//   "user": {
//     "email": "",
//     "name": ""
//   }
// }
export type TAuthResponse = TRefreshTokenResponse & {
  user: TUser
}

// Получение/Обновление данных пользователя Сервер вернёт такой ответ:
// {
//   "success": true,
//   "user": {
//     "email": "",
//     "name": ""
//   }
// }
export type TUserDataResponse = TBaseApiResponse & {
  user: TUser
}

type TMessageResponse<T extends string> = TBaseApiResponse & {
  message: T
}
// Тело ответа сервера при выходе из системы:
// {
//   "success": true,
//   "message": "Successful logout"
// }
export type TLogOutResponse = TMessageResponse<typeof SUCCESSFUL_LOGOUT_MESSAGE>

// sendPasswordRecoveryEmail
// Тело успешного ответа:
// {
//   "success": true,
//   "message": "Reset email sent"
// }
export type TSendRecoveryEmailResponse = TMessageResponse<
  typeof SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE
>

// sendPasswordResetRequest
// Тело успешного ответа:
// {
//   "success": true,
//   "message": "Password successfully reset"
// }
export type TPasswordResetResponse = TMessageResponse<
  typeof SUCCESSFUL_PASSWORD_RESET_MESSAGE
>

export type TCustomHeadersInit = HeadersInit & {
  authorization: string
}

export type TCustomRequestInit = RequestInit & {
  headers: TCustomHeadersInit
}

export type TPlaceOrderResponse = TBaseApiResponse & {
  name: string
  order: TOrder
}
