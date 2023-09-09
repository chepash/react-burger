import {
  SET_CURRENT_INGREDIENT,
  SET_CURRENT_ORDER_DETAILS,
  SET_IS_ERROR_MODAL_OPEN,
  SET_IS_INGREDIENT_MODAL_OPEN,
  SET_IS_ORDER_DETAILS_MODAL_OPEN,
  SET_IS_PLACED_NEW_ORDER_MODAL_OPEN,
} from '../actions/modal-actions'
import { initialState, modalReducer } from './modal-reducer'

describe('modalReducer', () => {
  it('should return the initial state', () => {
    const newState = modalReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('should handle SET_IS_INGREDIENT_MODAL_OPEN', () => {
    const action = { type: SET_IS_INGREDIENT_MODAL_OPEN, payload: true }
    const newState = modalReducer(initialState, action)

    expect(newState.isIngredientModalOpen).toBe(true)
  })

  it('should handle SET_CURRENT_INGREDIENT', () => {
    const mockIngredient = {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
    }

    const action = { type: SET_CURRENT_INGREDIENT, payload: mockIngredient }
    const newState = modalReducer(initialState, action)

    expect(newState.currentIngredient).toEqual(mockIngredient)
  })

  it('should handle SET_CURRENT_ORDER_DETAILS', () => {
    const mockOrderDetails = {
      originalOrderInfo: { data: 'someData' },
      orderIngredients: [],
      orderSum: 123,
    }

    const action = {
      type: SET_CURRENT_ORDER_DETAILS,
      payload: mockOrderDetails,
    }
    const newState = modalReducer(initialState, action)

    expect(newState.currentOrderDetails).toEqual(mockOrderDetails)
  })

  it('should handle SET_IS_PLACED_NEW_ORDER_MODAL_OPEN', () => {
    const action = {
      type: SET_IS_PLACED_NEW_ORDER_MODAL_OPEN,
      payload: true,
    }
    const newState = modalReducer(initialState, action)

    expect(newState.isPlacedNewOrderModalOpen).toBe(true)
  })

  it('should handle SET_IS_ORDER_DETAILS_MODAL_OPEN', () => {
    const action = {
      type: SET_IS_ORDER_DETAILS_MODAL_OPEN,
      payload: true,
    }
    const newState = modalReducer(initialState, action)

    expect(newState.isOrderDetailsModalOpen).toBe(true)
  })

  it('should handle SET_IS_ERROR_MODAL_OPEN', () => {
    const action = {
      type: SET_IS_ERROR_MODAL_OPEN,
      payload: true,
    }
    const newState = modalReducer(initialState, action)

    expect(newState.isErrorModalOpen).toBe(true)
  })
})
