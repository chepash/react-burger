import { API_BASE_URL, JWT_EXPIRE_ERROR_TEXT } from './constants'
import {
  TAuthResponse,
  TCustomRequestInit,
  TErrorResponse,
  TIngredient,
  TLogOutResponse,
  TPasswordResetResponse,
  TPlaceOrderResponse,
  TRefreshTokenResponse,
  TSendRecoveryEmailResponse,
  TUserDataResponse,
} from './types'

const getResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json()
  }

  return res.json().then((data) => {
    const error: TErrorResponse = {
      status: res.status.toString(),
      message: data.message || `Ошибка: ${res.status}`,
    }
    return Promise.reject(error)
  })
}

const request = async <T>(
  endpoint: string,
  options: RequestInit
): Promise<T> => {
  const url = `${API_BASE_URL}/${endpoint}`
  const res = await fetch(url, options)
  return getResponse<T>(res)
}

const fetchNewRefreshToken = async (): Promise<TRefreshTokenResponse> => {
  const refreshToken = localStorage.getItem('refreshToken')
  const endpoint = 'auth/token'
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: refreshToken }),
  }
  return request(endpoint, options)
}

const requestWithRefresh = async <T>(
  endpoint: string,
  options: TCustomRequestInit
): Promise<T> => {
  const url = `${API_BASE_URL}/${endpoint}`
  try {
    const res = await fetch(url, options)
    return await getResponse(res)
  } catch (err) {
    if ((err as Error).message === JWT_EXPIRE_ERROR_TEXT) {
      const refreshData = await fetchNewRefreshToken()
      localStorage.setItem('refreshToken', refreshData.refreshToken)
      localStorage.setItem(
        'accessToken',
        refreshData.accessToken.replace('Bearer ', '')
      )
      options.headers.authorization = refreshData.accessToken
      const res = await fetch(url, options)
      return await getResponse<T>(res)
    } else {
      return Promise.reject(err)
    }
  }
}

export const fetchIngredients = async (): Promise<
  ReadonlyArray<TIngredient>
> => {
  const endpoint = 'ingredients'
  const options = {
    method: 'GET',
  }
  return request(endpoint, options)
}

export const placeOrder = (
  ingredientsIds: string[]
): Promise<TPlaceOrderResponse> => {
  const accessToken = localStorage.getItem('accessToken')
  const endpoint = 'orders'
  const options = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients: ingredientsIds }),
  }
  return requestWithRefresh(endpoint, options)
}

export const registerUser = (
  name: string,
  email: string,
  password: string
): Promise<TAuthResponse> => {
  const endpoint = 'auth/register'
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }
  return request(endpoint, options)
}

export const loginUser = (
  email: string,
  password: string
): Promise<TAuthResponse> => {
  const endpoint = 'auth/login'
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }
  return request(endpoint, options)
}

export const logoutUser = (): Promise<TLogOutResponse> => {
  const refreshToken = localStorage.getItem('refreshToken')

  const endpoint = 'auth/logout'
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: refreshToken }),
  }
  return request(endpoint, options)
}

export const fetchUserData = (): Promise<TUserDataResponse> => {
  const accessToken = localStorage.getItem('accessToken')

  const endpoint = 'auth/user'
  const options = {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    method: 'GET',
  }
  return requestWithRefresh(endpoint, options)
}

export const updateUserData = (updatedFields: {
  name?: string
  email?: string
  password?: string
}): Promise<TUserDataResponse> => {
  const accessToken = localStorage.getItem('accessToken')
  const endpoint = 'auth/user'
  const options = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...updatedFields }),
  }
  return requestWithRefresh(endpoint, options)
}

export const sendPasswordRecoveryEmail = (
  email: string
): Promise<TSendRecoveryEmailResponse> => {
  const endpoint = 'password-reset'
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }
  return request(endpoint, options)
}

export const sendPasswordResetRequest = ({
  token,
  password,
}: {
  token: string
  password: string
}): Promise<TPasswordResetResponse> => {
  const endpoint = 'password-reset/reset'
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }
  return request(endpoint, options)
}