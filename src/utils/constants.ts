export const API_BASE_URL = 'https://norma.nomoreparties.space/api'

export const DEFAULT_ERROR_TEXT = 'Что-то пошло не так'

export const SUCCESSFUL_LOGOUT_MESSAGE = 'Successful logout'
export const SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE = 'Reset email sent'
export const SUCCESSFUL_PASSWORD_RESET_MESSAGE = 'Password successfully reset'

export const JWT_EXPIRE_ERROR_TEXT = 'jwt expired'
export const JWT_MALFORMED_ERROR_TEXT = 'jwt malformed'

export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

export const wsBaseUrl = 'wss://norma.nomoreparties.space/orders'
export const WS_JWT_INVALID_ERROR_TEXT = 'Invalid or missing token'

export const ROUTE_HOME = '/'
export const ROUTE_FEED = '/feed'
export const ROUTE_LOGIN = '/login'
export const ROUTE_REGISTER = '/register'
export const ROUTE_FORGOT_PASSWORD = '/forgot-password'
export const ROUTE_RESET_PASSWORD = '/reset-password'
export const ROUTE_PROFILE = '/profile'
export const ROUTE_NOT_FOUND = '*'
export const ROUTE_INGREDIENTS = '/ingredients'

export const SUBROUTE_ORDERS = 'orders'
export const SUBROUTE_ID = ':id'

export const ROUTE_PROFILE_ORDERS =
  `${ROUTE_PROFILE}/${SUBROUTE_ORDERS}` as const
export const ROUTE_FEED_ORDER_DETAILS = `${ROUTE_FEED}/${SUBROUTE_ID}` as const
export const ROUTE_INGREDIENT_DETAILS =
  `${ROUTE_INGREDIENTS}/${SUBROUTE_ID}` as const
export const ROUTE_PROFILE_ORDER_DETAILS =
  `${ROUTE_PROFILE}/${SUBROUTE_ORDERS}/${SUBROUTE_ID}` as const
