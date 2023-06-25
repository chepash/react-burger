import { API_BASE_URL } from './constants';

// @ts-ignore
const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // @ts-ignore
  return res.json().then((data) => {
    const error = {
      status: res.status.toString(),
      message: data.message || `Ошибка: ${res.status}`,
    };
    return Promise.reject(error);
  });
};

export const getIngredients = () =>
  fetch(API_BASE_URL, {
    method: 'GET',
  }).then(getResponse);
