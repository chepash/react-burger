import defaultBun from '../../images/default-bun.svg'
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  EMPTY_CONSTRUCTOR,
  MOVE_INGREDIENT,
} from '../actions/constructor-actions'
import { constructorReducer } from './constructor-reducer'

describe('constructorReducer', () => {
  const initialState = {
    constructorIngredients: [],
    constructorBun: {
      _id: '',
      name: 'Добавьте булку',
      type: 'bun',
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: defaultBun,
      image_mobile: defaultBun,
      image_large: defaultBun,
      __v: 0,
    },
  }

  it('should return the initial state', () => {
    const newState = constructorReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle ADD_INGREDIENT for bun', () => {
    const mockBun = {
      ...initialState.constructorBun,
      uuid: 'bun-uuid',
    }

    const action = {
      type: ADD_INGREDIENT,
      payload: { ingredient: mockBun },
    }
    const newState = constructorReducer(initialState, action)

    expect(newState.constructorBun).toEqual(mockBun)
  })

  it('should handle ADD_INGREDIENT for non-bun ingredient', () => {
    const mockIngredientWithUUID = {
      ingredient: {
        _id: '643d69a5c3f7b9001cfa0941',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
      },
      uuid: 'someUUID123',
    }

    const action = {
      type: ADD_INGREDIENT,
      payload: mockIngredientWithUUID,
    }
    const newState = constructorReducer(initialState, action)

    expect(newState.constructorIngredients).toHaveLength(1)
    expect(newState.constructorIngredients[0]).toEqual(mockIngredientWithUUID)
    expect(newState.constructorBun).toEqual(initialState.constructorBun)
  })

  it('should handle ADD_INGREDIENT for bun ingredient', () => {
    const mockIngredientWithUUID = {
      ingredient: {
        _id: '643d69a5c3f7b9001cfa093c',
        name: 'Краторная булка N-200i',
        type: 'bun',
      },
      uuid: 'someUUID123',
    }

    const action = {
      type: ADD_INGREDIENT,
      payload: mockIngredientWithUUID,
    }
    const newState = constructorReducer(initialState, action)

    expect(newState.constructorIngredients).toHaveLength(0)
    expect(newState.constructorBun).toEqual(mockIngredientWithUUID.ingredient)
  })

  it('should handle DELETE_INGREDIENT for non-bun ingredient', () => {
    const mockIngredients = [
      {
        ingredient: {
          _id: '643d69a5c3f7b9001cfa093e',
          name: 'Филе Люминесцентного тетраодонтимформа',
          type: 'main',
        },
        uuid: 'someUUID1',
      },
      {
        ingredient: {
          _id: '643d69a5c3f7b9001cfa0944',
          name: 'Соус традиционный галактический',
          type: 'sauce',
        },
        uuid: 'someUUID2',
      },
    ]

    const modifiedState = {
      ...initialState,
      constructorIngredients: mockIngredients,
    }

    const action = {
      type: DELETE_INGREDIENT,
      payload: 'someUUID1',
    }

    const newState = constructorReducer(modifiedState, action)

    expect(
      newState.constructorIngredients.some((i) => i.uuid === 'someUUID1')
    ).toBe(false)
  })

  it('should handle EMPTY_CONSTRUCTOR', () => {
    const modifiedState = {
      ...initialState,
      constructorIngredients: [
        {
          ingredient: {
            _id: '643d69a5c3f7b9001cfa093e',
            name: 'Филе Люминесцентного тетраодонтимформа',
            type: 'main',
          },
          uuid: 'someUUID1',
        },
      ],
      constructorBun: {
        ingredient: {
          _id: '643d69a5c3f7b9001cfa093c',
          name: 'Краторная булка N-200i',
          type: 'bun',
        },
        uuid: 'someUUID123',
      },
    }

    const action = { type: EMPTY_CONSTRUCTOR }
    const newState = constructorReducer(modifiedState, action)

    expect(newState.constructorIngredients).toHaveLength(0)
    expect(newState.constructorBun).toEqual(initialState.constructorBun)
  })

  it('should handle MOVE_INGREDIENT', () => {
    const mockIngredients = [
      {
        ingredient: {
          _id: '643d69a5c3f7b9001cfa093e',
          name: 'Филе Люминесцентного тетраодонтимформа',
          type: 'main',
        },
        uuid: 'filet-main-UUID',
      },
      {
        ingredient: {
          _id: '643d69a5c3f7b9001cfa0944',
          name: 'Соус традиционный галактический',
          type: 'sauce',
        },
        uuid: 'galaxy-sauce-UUID',
      },
      {
        ingredient: {
          _id: '643d69a5c3f7b9001cfa0948',
          name: 'Кристаллы марсианских альфа-сахаридов',
          type: 'main',
        },
        uuid: 'crystals-main-UUID',
      },
    ]

    const modifiedState = {
      ...initialState,
      constructorIngredients: mockIngredients,
    }

    const action = {
      type: MOVE_INGREDIENT,
      payload: {
        fromIndex: 0,
        toIndex: 2,
      },
    }
    const newState = constructorReducer(modifiedState, action)

    expect(newState.constructorIngredients).toHaveLength(3)
    expect(newState.constructorIngredients[0].uuid).toBe('galaxy-sauce-UUID')
    expect(newState.constructorIngredients[1].uuid).toBe('crystals-main-UUID')
    expect(newState.constructorIngredients[2].uuid).toBe('filet-main-UUID')
  })
})
