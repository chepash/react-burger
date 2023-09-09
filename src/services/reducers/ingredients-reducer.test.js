import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from '../actions/ingredients-actions'
import { ingredientsReducer, initialState } from './ingredients-reducer'

describe('ingredientsReducer', () => {
  it('should return the initial state', () => {
    const newState = ingredientsReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    const newState = ingredientsReducer(initialState, {
      type: GET_INGREDIENTS_REQUEST,
    })

    expect(newState.isLoading).toEqual(true)
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const mockIngredients = [
      {
        _id: '643d69a5c3f7b9001cfa093c',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
      },
      {
        _id: '643d69a5c3f7b9001cfa093e',
        name: 'Филе Люминесцентного тетраодонтимформа',
        type: 'main',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
        __v: 0,
      },
      {
        _id: '643d69a5c3f7b9001cfa0943',
        name: 'Соус фирменный Space Sauce',
        type: 'sauce',
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
        __v: 0,
      },
    ]
    const loadingState = {
      ...initialState,
      isLoading: true,
    }

    const newState = ingredientsReducer(loadingState, {
      type: GET_INGREDIENTS_SUCCESS,
      payload: mockIngredients,
    })

    expect(newState.isLoading).toEqual(false)
    expect(newState.ingredients).toEqual(mockIngredients)
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const loadingState = {
      ...initialState,
      isLoading: true,
    }

    const newState = ingredientsReducer(loadingState, {
      type: GET_INGREDIENTS_FAILED,
    })

    expect(newState.isLoading).toEqual(false)
    expect(newState.isError).toEqual(true)
    expect(newState.ingredients).toEqual([])
  })
})
