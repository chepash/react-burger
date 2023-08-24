export const API_BASE_URL = 'https://norma.nomoreparties.space/api'

export const DEFAULT_ERROR_TEXT = 'Что-то пошло не так'

export const SUCCESSFUL_LOGOUT_MESSAGE = 'Successful logout'
export const SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE = 'Reset email sent'
export const SUCCESSFUL_PASSWORD_RESET_MESSAGE = 'Password successfully reset'

export const JWT_EXPIRE_ERROR_TEXT = 'jwt expired'

export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

// redux actions:
// constructor-actions
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const EMPTY_CONSTRUCTOR = 'EMPTY_CONSTRUCTOR'
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT'
// ingredients-actions
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'
// login-actions
export const UPDATE_LOGIN_FORM_STATE = 'UPDATE_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_FORM_STATE = 'CLEAR_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_STATE = 'CLEAR_LOGIN_STATE'
export const LOGIN_FORM_SUBMIT_REQUEST = 'LOGIN_FORM_SUBMIT_REQUEST'
export const LOGIN_FORM_SUBMIT_SUCCESS = 'LOGIN_FORM_SUBMIT_SUCCESS'
export const LOGIN_FORM_SUBMIT_FAILED = 'LOGIN_FORM_SUBMIT_FAILED'
