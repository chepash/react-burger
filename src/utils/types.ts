import {
  SUCCESSFUL_LOGOUT_MESSAGE,
  SUCCESSFUL_PASSWORD_RESET_MESSAGE,
  SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE,
} from './constants'

export type TIngredient = {
  readonly _id: string
  readonly name: string
  readonly type: string
  readonly proteins: number
  readonly fat: number
  readonly carbohydrates: number
  readonly calories: number
  readonly price: number
  readonly image: string
  readonly image_mobile: string
  readonly image_large: string
  readonly __v: number
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
  readonly email: string
  readonly name: string
}

export type TErrorResponse = {
  readonly status: string
  readonly message: string
}

type TBaseApiResponse = {
  readonly success: boolean
}

// Тело ответа сервера при успешном обновлении токена:
// {
//   "success": true,
//   "accessToken": "Bearer ...",
//   "refreshToken": ""
// }
export type TTokenResponse = TBaseApiResponse & {
  readonly accessToken: string
  readonly refreshToken: string
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
export type TAuthResponse = TTokenResponse & {
  readonly user: TUser
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
  readonly user: TUser
}

type TMessageResponse<T extends string> = TBaseApiResponse & {
  readonly message: T
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
