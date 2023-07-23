import { API_BASE_URL } from './constants'

const getResponse = (res) => {
  if (res.ok) {
    return res.json()
  }

  return res.json().then((data) => {
    const error = {
      status: res.status.toString(),
      message: data.message || `Ошибка: ${res.status}`,
    }
    return Promise.reject(error)
  })
}

const request = (endpoint, options) => {
  const url = `${API_BASE_URL}/${endpoint}`
  return fetch(url, options).then(getResponse)
}

const fetchNewRefreshToken = () => {
  const refreshToken = localStorage.getItem('refreshToken')
  const endpoint = 'auth/token'
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

const requestWithRefresh = async (endpoint, options) => {
  const url = `${API_BASE_URL}/${endpoint}`
  try {
    const res = await fetch(url, options) //делаем запрос
    return await getResponse(res)
  } catch (err) {
    if (err.message === 'jwt expired') {
      const refreshData = await fetchNewRefreshToken()
      localStorage.setItem('refreshToken', refreshData.refreshToken)
      localStorage.setItem(
        'accessToken',
        refreshData.accessToken.replace('Bearer ', '')
      )
      options.headers.authorization = refreshData.accessToken
      const res = await fetch(url, options) //вызываем перезапрос данных
      return await getResponse(res)
    } else {
      return Promise.reject(err)
    }
  }
}

export const fetchIngredients = () => {
  const endpoint = 'ingredients'
  const options = {
    method: 'GET',
  }
  return request(endpoint, options)
}

export const placeOrder = (ingredientsIds) => {
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

export const registerUser = (name, email, password) => {
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

export const loginUser = (email, password) => {
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

export const logoutUser = () => {
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

export const fetchUserData = () => {
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

export const updateUserData = (updatedFields) => {
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

export const sendPasswordRecoveryEmail = (email) => {
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

export const sendPasswordResetRequest = ({ token, password }) => {
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
