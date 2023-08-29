import { TFeedResponse } from '../services/types/data'

export const API_BASE_URL = 'https://norma.nomoreparties.space/api'

export const DEFAULT_ERROR_TEXT = 'Что-то пошло не так'

export const SUCCESSFUL_LOGOUT_MESSAGE = 'Successful logout'
export const SUCCESSFUL_RECOVERY_MAIL_SEND_MESSAGE = 'Reset email sent'
export const SUCCESSFUL_PASSWORD_RESET_MESSAGE = 'Password successfully reset'

export const JWT_EXPIRE_ERROR_TEXT = 'jwt expired'

export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

// redux actions:
// - constructor-actions
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const EMPTY_CONSTRUCTOR = 'EMPTY_CONSTRUCTOR'
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT'
// - ingredients-actions
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'
// - login-actions
export const UPDATE_LOGIN_FORM_STATE = 'UPDATE_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_FORM_STATE = 'CLEAR_LOGIN_FORM_STATE'
export const CLEAR_LOGIN_STATE = 'CLEAR_LOGIN_STATE'
export const LOGIN_FORM_SUBMIT_REQUEST = 'LOGIN_FORM_SUBMIT_REQUEST'
export const LOGIN_FORM_SUBMIT_SUCCESS = 'LOGIN_FORM_SUBMIT_SUCCESS'
export const LOGIN_FORM_SUBMIT_FAILED = 'LOGIN_FORM_SUBMIT_FAILED'
// - modal-actions
export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT'
export const SET_IS_INGREDIENT_MODAL_OPEN = 'SET_IS_INGREDIENT_MODAL_OPEN'
export const SET_IS_PLACED_NEW_ORDER_MODAL_OPEN =
  'SET_IS_PLACED_NEW_ORDER_MODAL_OPEN'
export const SET_CURENT_ORDER_DETAILS = 'SET_CURENT_ORDER_DETAILS'
export const SET_IS_ORDER_DETAILS_MODAL_OPEN = 'SET_IS_ORDER_DETAILS_MODAL_OPEN'
export const SET_IS_ERROR_MODAL_OPEN = 'SET_IS_ERROR_MODAL_OPEN'
// - order-actions
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED'
export const CLEAR_ORDER_STATE = 'CLEAR_ORDER_STATE'
// - password-reset-actions
export const UPDATE_PWD_RESET_FORM_STATE = 'UPDATE_PWD_RESET_FORM_STATE'
export const CLEAR_PWD_RESET_FORM_STATE = 'CLEAR_PWD_RESET_FORM_STATE'
export const CLEAR_PWD_RESET_STATE = 'CLEAR_PWD_RESET_STATE'
export const PWD_RESET_FORM_SUBMIT_REQUEST = 'PWD_RESET_FORM_SUBMIT_REQUEST'
export const PWD_RESET_FORM_SUBMIT_SUCCESS = 'PWD_RESET_FORM_SUBMIT_SUCCESS'
export const PWD_RESET_FORM_SUBMIT_FAILED = 'PWD_RESET_FORM_SUBMIT_FAILED'
// - password-restore-actions
export const UPDATE_PWD_RESTORE_FORM_STATE = 'UPDATE_PWD_RESTORE_FORM_STATE'
export const CLEAR_PWD_RESTORE_FORM_STATE = 'CLEAR_PWD_RESTORE_FORM_STATE'
export const CLEAR_PWD_RESTORE_STATE = 'CLEAR_PWD_RESTORE_STATE'
export const PWD_RESTORE_FORM_SUBMIT_REQUEST = 'PWD_RESTORE_FORM_SUBMIT_REQUEST'
export const PWD_RESTORE_FORM_SUBMIT_SUCCESS = 'PWD_RESTORE_FORM_SUBMIT_SUCCESS'
export const PWD_RESTORE_FORM_SUBMIT_FAILED = 'PWD_RESTORE_FORM_SUBMIT_FAILED'
// - profile-actions
export const UPDATE_PROFILE_FORM_STATE = 'UPDATE_PROFILE_FORM_STATE'
export const CLEAR_PROFILE_FORM_STATE = 'CLEAR_PROFILE_FORM_STATE'
export const CLEAR_PROFILE_STATE = 'CLEAR_PROFILE_STATE'
export const PROFILE_FORM_SUBMIT_REQUEST = 'PROFILE_FORM_SUBMIT_REQUEST'
export const PROFILE_FORM_SUBMIT_SUCCESS = 'PROFILE_FORM_SUBMIT_SUCCESS'
export const PROFILE_FORM_SUBMIT_FAILED = 'PROFILE_FORM_SUBMIT_FAILED'
// - register-actions
export const UPDATE_REGISTER_FORM_STATE = 'UPDATE_REGISTER_FORM_STATE'
export const CLEAR_REGISTER_FORM_STATE = 'CLEAR_REGISTER_FORM_STATE'
export const CLEAR_REGISTER_STATE = 'CLEAR_REGISTER_STATE'
export const REGISTER_FORM_SUBMIT_REQUEST = 'REGISTER_FORM_SUBMIT_REQUEST'
export const REGISTER_FORM_SUBMIT_SUCCESS = 'REGISTER_FORM_SUBMIT_SUCCESS'
export const REGISTER_FORM_SUBMIT_FAILED = 'REGISTER_FORM_SUBMIT_FAILED'
// - user-actions
export const GET_USER_DATA_REQUEST = 'GET_USER_DATA_REQUEST'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED'
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED'
export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'
export const CLEAR_USER_STATE = 'CLEAR_USER_STATE'

export const ORDERS_RESPONSE: TFeedResponse = {
  success: true,
  orders: [
    {
      _id: '64ecddc882e277001bfabd3a',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
      ],
      status: 'created',
      name: 'Астероидный флюоресцентный бургер',
      createdAt: '2023-08-28T17:47:52.590Z',
      updatedAt: '2023-08-28T17:47:52.775Z',
      number: 18184,
    },
    {
      _id: '64ecddab82e277001bfabd39',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0948',
      ],
      status: 'done',
      name: 'Альфа-сахаридный space флюоресцентный экзо-плантаго бургер',
      createdAt: '2023-08-28T17:47:23.220Z',
      updatedAt: '2023-08-28T17:47:23.464Z',
      number: 18183,
    },
    {
      _id: '64ecdc5182e277001bfabd33',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space spicy флюоресцентный традиционный-галактический антарианский бургер',
      createdAt: '2023-08-28T17:41:37.142Z',
      updatedAt: '2023-08-28T17:41:37.395Z',
      number: 18182,
    },
    {
      _id: '64ecdc2982e277001bfabd31',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space spicy флюоресцентный традиционный-галактический антарианский бургер',
      createdAt: '2023-08-28T17:40:57.618Z',
      updatedAt: '2023-08-28T17:40:57.849Z',
      number: 18181,
    },
    {
      _id: '64ecd86782e277001bfabd24',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space антарианский флюоресцентный бургер',
      createdAt: '2023-08-28T17:24:55.628Z',
      updatedAt: '2023-08-28T17:24:55.872Z',
      number: 18180,
    },
    {
      _id: '64ecd7e482e277001bfabd21',
      ingredients: [
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093c',
      ],
      status: 'done',
      name: 'Био-марсианский краторный бургер',
      createdAt: '2023-08-28T17:22:44.064Z',
      updatedAt: '2023-08-28T17:22:44.265Z',
      number: 18179,
    },
    {
      _id: '64ecd65a82e277001bfabd1c',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T17:16:10.348Z',
      updatedAt: '2023-08-28T17:16:10.596Z',
      number: 18178,
    },
    {
      _id: '64ecd58382e277001bfabd17',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T17:12:35.309Z',
      updatedAt: '2023-08-28T17:12:35.507Z',
      number: 18177,
    },
    {
      _id: '64ecd46f82e277001bfabd13',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T17:07:59.044Z',
      updatedAt: '2023-08-28T17:07:59.242Z',
      number: 18176,
    },
    {
      _id: '64ecd43082e277001bfabd11',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T17:06:56.984Z',
      updatedAt: '2023-08-28T17:06:57.194Z',
      number: 18175,
    },
    {
      _id: '64ecd34082e277001bfabd0c',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T17:02:56.978Z',
      updatedAt: '2023-08-28T17:02:57.174Z',
      number: 18174,
    },
    {
      _id: '64ecd2a082e277001bfabd05',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T17:00:16.250Z',
      updatedAt: '2023-08-28T17:00:16.481Z',
      number: 18173,
    },
    {
      _id: '64ecd29c82e277001bfabd03',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T17:00:12.383Z',
      updatedAt: '2023-08-28T17:00:12.577Z',
      number: 18172,
    },
    {
      _id: '64ecd13d82e277001bfabcfb',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:54:21.557Z',
      updatedAt: '2023-08-28T16:54:21.766Z',
      number: 18171,
    },
    {
      _id: '64ecd0d282e277001bfabcf6',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:52:34.357Z',
      updatedAt: '2023-08-28T16:52:34.543Z',
      number: 18170,
    },
    {
      _id: '64eccfcb82e277001bfabcf1',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:48:11.217Z',
      updatedAt: '2023-08-28T16:48:11.491Z',
      number: 18169,
    },
    {
      _id: '64eccebb82e277001bfabced',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:43:39.280Z',
      updatedAt: '2023-08-28T16:43:39.477Z',
      number: 18168,
    },
    {
      _id: '64ecce2982e277001bfabce7',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:41:13.342Z',
      updatedAt: '2023-08-28T16:41:13.574Z',
      number: 18167,
    },
    {
      _id: '64eccdd482e277001bfabce3',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:39:48.352Z',
      updatedAt: '2023-08-28T16:39:48.542Z',
      number: 18166,
    },
    {
      _id: '64ecc9d982e277001bfabccb',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2023-08-28T16:22:49.967Z',
      updatedAt: '2023-08-28T16:22:50.165Z',
      number: 18165,
    },
    {
      _id: '64ecc80f82e277001bfabcc6',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:15:11.827Z',
      updatedAt: '2023-08-28T16:15:12.069Z',
      number: 18164,
    },
    {
      _id: '64ecc7fa82e277001bfabcc4',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T16:14:50.849Z',
      updatedAt: '2023-08-28T16:14:51.020Z',
      number: 18163,
    },
    {
      _id: '64ecc5ef82e277001bfabcba',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa093c',
      ],
      status: 'done',
      name: 'Астероидный краторный экзо-плантаго бургер',
      createdAt: '2023-08-28T16:06:07.563Z',
      updatedAt: '2023-08-28T16:06:07.816Z',
      number: 18162,
    },
    {
      _id: '64ecc5c182e277001bfabcb8',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Антарианский традиционный-галактический флюоресцентный бургер',
      createdAt: '2023-08-28T16:05:21.749Z',
      updatedAt: '2023-08-28T16:05:21.955Z',
      number: 18161,
    },
    {
      _id: '64ecc5b382e277001bfabcb5',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Антарианский традиционный-галактический флюоресцентный бургер',
      createdAt: '2023-08-28T16:05:07.236Z',
      updatedAt: '2023-08-28T16:05:07.465Z',
      number: 18160,
    },
    {
      _id: '64ecb92082e277001bfabc72',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T15:11:28.543Z',
      updatedAt: '2023-08-28T15:11:28.777Z',
      number: 18159,
    },
    {
      _id: '64eca72382e277001bfabc1a',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space антарианский люминесцентный флюоресцентный бургер',
      createdAt: '2023-08-28T13:54:43.404Z',
      updatedAt: '2023-08-28T13:54:43.629Z',
      number: 18158,
    },
    {
      _id: '64ec9f2582e277001bfabbd3',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T13:20:37.875Z',
      updatedAt: '2023-08-28T13:20:38.092Z',
      number: 18157,
    },
    {
      _id: '64ec9e0282e277001bfabbb6',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T13:15:46.605Z',
      updatedAt: '2023-08-28T13:15:46.856Z',
      number: 18156,
    },
    {
      _id: '64ec99b682e277001bfabb9f',
      ingredients: ['643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Био-марсианский флюоресцентный бургер',
      createdAt: '2023-08-28T12:57:26.768Z',
      updatedAt: '2023-08-28T12:57:26.989Z',
      number: 18155,
    },
    {
      _id: '64ec990982e277001bfabb97',
      ingredients: [
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Био-марсианский люминесцентный флюоресцентный бургер',
      createdAt: '2023-08-28T12:54:33.881Z',
      updatedAt: '2023-08-28T12:54:34.071Z',
      number: 18154,
    },
    {
      _id: '64ec98c682e277001bfabb95',
      ingredients: [
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
      ],
      status: 'done',
      name: 'Био-марсианский люминесцентный краторный бургер',
      createdAt: '2023-08-28T12:53:26.779Z',
      updatedAt: '2023-08-28T12:53:26.974Z',
      number: 18153,
    },
    {
      _id: '64ec98a382e277001bfabb94',
      ingredients: ['643d69a5c3f7b9001cfa093e', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Люминесцентный краторный бургер',
      createdAt: '2023-08-28T12:52:51.777Z',
      updatedAt: '2023-08-28T12:52:51.963Z',
      number: 18152,
    },
    {
      _id: '64ec988382e277001bfabb93',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
      status: 'done',
      name: 'Люминесцентный флюоресцентный бургер',
      createdAt: '2023-08-28T12:52:19.775Z',
      updatedAt: '2023-08-28T12:52:19.969Z',
      number: 18151,
    },
    {
      _id: '64ec8dcc82e277001bfabb61',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T12:06:36.022Z',
      updatedAt: '2023-08-28T12:06:36.202Z',
      number: 18150,
    },
    {
      _id: '64ec897c82e277001bfabb49',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный spicy бургер',
      createdAt: '2023-08-28T11:48:12.946Z',
      updatedAt: '2023-08-28T11:48:13.159Z',
      number: 18149,
    },
    {
      _id: '64ec860b82e277001bfabb36',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa094a',
      ],
      status: 'done',
      name: 'Бессмертный space астероидный фалленианский экзо-плантаго минеральный люминесцентный альфа-сахаридный антарианский метеоритный краторный бургер',
      createdAt: '2023-08-28T11:33:31.718Z',
      updatedAt: '2023-08-28T11:33:31.964Z',
      number: 18148,
    },
    {
      _id: '64ec835a82e277001bfabb22',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space астероидный spicy флюоресцентный фалленианский экзо-плантаго антарианский бургер',
      createdAt: '2023-08-28T11:22:02.862Z',
      updatedAt: '2023-08-28T11:22:03.065Z',
      number: 18147,
    },
    {
      _id: '64ec7d8482e277001bfabb11',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T10:57:08.188Z',
      updatedAt: '2023-08-28T10:57:08.374Z',
      number: 18146,
    },
    {
      _id: '64ec793282e277001bfabaf7',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
      ],
      status: 'done',
      name: 'Space антарианский флюоресцентный бургер',
      createdAt: '2023-08-28T10:38:42.681Z',
      updatedAt: '2023-08-28T10:38:42.916Z',
      number: 18145,
    },
    {
      _id: '64ec793182e277001bfabaf6',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
      ],
      status: 'done',
      name: 'Space антарианский флюоресцентный бургер',
      createdAt: '2023-08-28T10:38:41.083Z',
      updatedAt: '2023-08-28T10:38:41.301Z',
      number: 18144,
    },
    {
      _id: '64ec78e282e277001bfabaf5',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
      ],
      status: 'done',
      name: 'Space экзо-плантаго люминесцентный антарианский краторный бургер',
      createdAt: '2023-08-28T10:37:22.532Z',
      updatedAt: '2023-08-28T10:37:22.765Z',
      number: 18143,
    },
    {
      _id: '64ec75a982e277001bfabae1',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0943',
      ],
      status: 'done',
      name: 'Space флюоресцентный spicy бургер',
      createdAt: '2023-08-28T10:23:37.077Z',
      updatedAt: '2023-08-28T10:23:37.336Z',
      number: 18142,
    },
    {
      _id: '64ec745a82e277001bfabad7',
      ingredients: ['643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space бургер',
      createdAt: '2023-08-28T10:18:02.165Z',
      updatedAt: '2023-08-28T10:18:02.353Z',
      number: 18141,
    },
    {
      _id: '64ec6f8982e277001bfabac9',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
      ],
      status: 'done',
      name: 'Space антарианский флюоресцентный бургер',
      createdAt: '2023-08-28T09:57:29.155Z',
      updatedAt: '2023-08-28T09:57:29.567Z',
      number: 18140,
    },
    {
      _id: '64ec685982e277001bfabac2',
      ingredients: ['643d69a5c3f7b9001cfa0942', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный spicy бургер',
      createdAt: '2023-08-28T09:26:49.424Z',
      updatedAt: '2023-08-28T09:26:49.667Z',
      number: 18139,
    },
    {
      _id: '64ec652982e277001bfaba82',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093c',
      ],
      status: 'done',
      name: 'Space антарианский краторный бургер',
      createdAt: '2023-08-28T09:13:13.953Z',
      updatedAt: '2023-08-28T09:13:14.186Z',
      number: 18138,
    },
    {
      _id: '64ec641a82e277001bfaba81',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa093c',
      ],
      status: 'done',
      name: 'Астероидный краторный экзо-плантаго бургер',
      createdAt: '2023-08-28T09:08:42.890Z',
      updatedAt: '2023-08-28T09:08:43.088Z',
      number: 18137,
    },
    {
      _id: '64ec5cd282e277001bfaba6b',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T08:37:38.233Z',
      updatedAt: '2023-08-28T08:37:38.436Z',
      number: 18136,
    },
    {
      _id: '64ec5ccc82e277001bfaba6a',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T08:37:32.537Z',
      updatedAt: '2023-08-28T08:37:32.759Z',
      number: 18135,
    },
  ],
  total: 17810,
  totalToday: 71,
}
