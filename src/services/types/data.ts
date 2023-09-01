import {
  SUCCESSFUL_LOGOUT_MESSAGE,
  SUCCESSFUL_PASSWORD_RESET_MESSAGE,
  SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE,
} from '../../utils/constants'

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

export type TPlacedNewOrder = {
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

export type TUser = {
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

// Тело ответа сервера при успешном запросе инжедиентов:
// {
//   "success": true,
//   "data": [
//       {
//           "_id": "643d69a5c3f7b9001cfa093c",
//           "name": "Краторная булка N-200i",
//           "type": "bun",
//           "proteins": 80,
//           "fat": 24,
//           "carbohydrates": 53,
//           "calories": 420,
//           "price": 1255,
//           "image": "https://code.s3.yandex.net/react/code/bun-02.png",
//           "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
//           "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
//           "__v": 0
//       },
//       {...
export type TFetchIngredientsResponse = TBaseApiResponse & {
  data: TIngredient[]
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
export type TLogoutResponse = TMessageResponse<typeof SUCCESSFUL_LOGOUT_MESSAGE>

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

export type TPlaceNewOrderResponse = TBaseApiResponse & {
  name: string
  order: TPlacedNewOrder
}
