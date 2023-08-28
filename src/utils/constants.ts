import { TFeedResponse } from '../services/reducers/feed-reducer'

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
export const SET_IS_ORDER_MODAL_OPEN = 'SET_IS_ORDER_MODAL_OPEN'
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
      updatedAt: '2023-08-25T11:48:13.159Z',
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
    {
      _id: '64ec5cc582e277001bfaba69',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T08:37:25.714Z',
      updatedAt: '2023-08-28T08:37:25.935Z',
      number: 18134,
    },
    {
      _id: '64ec577b82e277001bfaba5a',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
      ],
      status: 'done',
      name: 'Space антарианский флюоресцентный бургер',
      createdAt: '2023-08-28T08:14:51.966Z',
      updatedAt: '2023-08-28T08:14:52.159Z',
      number: 18133,
    },
    {
      _id: '64ec53bb82e277001bfaba53',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space spicy флюоресцентный минеральный люминесцентный бургер',
      createdAt: '2023-08-28T07:58:51.172Z',
      updatedAt: '2023-08-28T07:58:51.349Z',
      number: 18132,
    },
    {
      _id: '64ec47be82e277001bfaba31',
      ingredients: ['643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2023-08-28T07:07:42.290Z',
      updatedAt: '2023-08-28T07:07:42.473Z',
      number: 18131,
    },
    {
      _id: '64ec3c5882e277001bfaba22',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный фалленианский бургер',
      createdAt: '2023-08-28T06:19:04.644Z',
      updatedAt: '2023-08-28T06:19:04.887Z',
      number: 18130,
    },
    {
      _id: '64ec397d82e277001bfaba20',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-28T06:06:53.077Z',
      updatedAt: '2023-08-28T06:06:53.320Z',
      number: 18129,
    },
    {
      _id: '64ec381c82e277001bfaba1e',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c',
      ],
      status: 'done',
      name: 'Люминесцентный краторный spicy бургер',
      createdAt: '2023-08-28T06:01:00.791Z',
      updatedAt: '2023-08-28T06:01:00.986Z',
      number: 18128,
    },
    {
      _id: '64ec25e182e277001bfaba14',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space астероидный spicy флюоресцентный экзо-плантаго бургер',
      createdAt: '2023-08-28T04:43:13.874Z',
      updatedAt: '2023-08-28T04:43:14.033Z',
      number: 18127,
    },
    {
      _id: '64ec258782e277001bfaba13',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa093c',
      ],
      status: 'done',
      name: 'Астероидный фалленианский экзо-плантаго минеральный альфа-сахаридный краторный бургер',
      createdAt: '2023-08-28T04:41:43.646Z',
      updatedAt: '2023-08-28T04:41:43.926Z',
      number: 18126,
    },
    {
      _id: '64ebc7d482e277001bfab9a1',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Био-марсианский space астероидный флюоресцентный бургер',
      createdAt: '2023-08-27T22:01:56.472Z',
      updatedAt: '2023-08-27T22:01:56.667Z',
      number: 18125,
    },
    {
      _id: '64ebc50d82e277001bfab99a',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T21:50:05.803Z',
      updatedAt: '2023-08-27T21:50:05.982Z',
      number: 18124,
    },
    {
      _id: '64ebc4eb82e277001bfab999',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T21:49:31.966Z',
      updatedAt: '2023-08-27T21:49:32.179Z',
      number: 18123,
    },
    {
      _id: '64ebbea582e277001bfab986',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный spicy бургер',
      createdAt: '2023-08-27T21:22:45.109Z',
      updatedAt: '2023-08-27T21:22:45.285Z',
      number: 18122,
    },
    {
      _id: '64ebb20282e277001bfab96c',
      ingredients: ['643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T20:28:50.950Z',
      updatedAt: '2023-08-27T20:28:51.151Z',
      number: 18121,
    },
    {
      _id: '64ebad2182e277001bfab960',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2023-08-27T20:08:01.259Z',
      updatedAt: '2023-08-27T20:08:01.453Z',
      number: 18120,
    },
    {
      _id: '64ebaa7782e277001bfab950',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2023-08-27T19:56:39.401Z',
      updatedAt: '2023-08-27T19:56:39.625Z',
      number: 18119,
    },
    {
      _id: '64eba91c82e277001bfab94b',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Бессмертный люминесцентный флюоресцентный бургер',
      createdAt: '2023-08-27T19:50:52.388Z',
      updatedAt: '2023-08-27T19:50:52.564Z',
      number: 18118,
    },
    {
      _id: '64eb971682e277001bfab922',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
      ],
      status: 'done',
      name: 'Флюоресцентный экзо-плантаго бургер',
      createdAt: '2023-08-27T18:33:58.429Z',
      updatedAt: '2023-08-27T18:33:58.677Z',
      number: 18117,
    },
    {
      _id: '64eb910982e277001bfab917',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Флюоресцентный экзо-плантаго бургер',
      createdAt: '2023-08-27T18:08:09.911Z',
      updatedAt: '2023-08-27T18:08:10.116Z',
      number: 18116,
    },
    {
      _id: '64eb90d882e277001bfab916',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2023-08-27T18:07:20.206Z',
      updatedAt: '2023-08-27T18:07:20.404Z',
      number: 18115,
    },
    {
      _id: '64eb8ffb82e277001bfab914',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d',
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T18:03:39.811Z',
      updatedAt: '2023-08-27T18:03:39.970Z',
      number: 18114,
    },
    {
      _id: '64eb8b9382e277001bfab90b',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:44:51.493Z',
      updatedAt: '2023-08-27T17:44:51.657Z',
      number: 18113,
    },
    {
      _id: '64eb8af982e277001bfab909',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:42:17.924Z',
      updatedAt: '2023-08-27T17:42:18.158Z',
      number: 18112,
    },
    {
      _id: '64eb8ace82e277001bfab908',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:41:34.975Z',
      updatedAt: '2023-08-27T17:41:35.174Z',
      number: 18111,
    },
    {
      _id: '64eb893882e277001bfab905',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:34:48.684Z',
      updatedAt: '2023-08-27T17:34:48.897Z',
      number: 18110,
    },
    {
      _id: '64eb892082e277001bfab902',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:34:24.206Z',
      updatedAt: '2023-08-27T17:34:24.377Z',
      number: 18109,
    },
    {
      _id: '64eb890282e277001bfab901',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:33:54.818Z',
      updatedAt: '2023-08-27T17:33:55.041Z',
      number: 18108,
    },
    {
      _id: '64eb88ee82e277001bfab900',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:33:34.298Z',
      updatedAt: '2023-08-27T17:33:34.583Z',
      number: 18107,
    },
    {
      _id: '64eb88a582e277001bfab8fe',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:32:21.735Z',
      updatedAt: '2023-08-27T17:32:21.954Z',
      number: 18106,
    },
    {
      _id: '64eb886d82e277001bfab8fd',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:31:25.598Z',
      updatedAt: '2023-08-27T17:31:25.775Z',
      number: 18105,
    },
    {
      _id: '64eb87c182e277001bfab8fb',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:28:33.316Z',
      updatedAt: '2023-08-27T17:28:33.490Z',
      number: 18104,
    },
    {
      _id: '64eb879082e277001bfab8fa',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:27:44.151Z',
      updatedAt: '2023-08-27T17:27:44.360Z',
      number: 18103,
    },
    {
      _id: '64eb874a82e277001bfab8f8',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:26:34.245Z',
      updatedAt: '2023-08-27T17:26:34.520Z',
      number: 18102,
    },
    {
      _id: '64eb874882e277001bfab8f7',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:26:32.425Z',
      updatedAt: '2023-08-27T17:26:32.595Z',
      number: 18101,
    },
    {
      _id: '64eb872f82e277001bfab8f6',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-08-27T17:26:07.393Z',
      updatedAt: '2023-08-27T17:26:07.601Z',
      number: 18100,
    },
  ],
  total: 17775,
  totalToday: 170,
}
