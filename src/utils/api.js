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

export const fetchIngredients = () => {
  const endpoint = 'ingredients'
  const options = {
    method: 'GET',
  }
  return request(endpoint, options)
}

export const placeOrder = (ingredientsIds) => {
  const endpoint = 'orders'
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients: ingredientsIds }),
  }
  return request(endpoint, options)
}

export const registerUser = (email, password, name) => {
  const endpoint = 'auth/register'
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }
  return request(endpoint, options)
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

export const sendPasswordResetRequest = (password, token) => {
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
