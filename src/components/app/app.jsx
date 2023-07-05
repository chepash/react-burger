import cn from 'classnames'
import styles from './app.module.scss'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import * as api from '../../utils/api'
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'

import { AppContext } from '../../services/appContext'
import {
  PICK_BUN,
  PICK_PRIMARY_INGREDIENTS,
  SET_ALL_INGREDIENTS,
  SET_LOADER_STATUS,
  SET_ORDER_DETAILS,
  UPDATE_ORDER_INGREDIENTS_ID,
  UPDATE_ORDER_SUM,
} from '../../utils/constants'
import Modal from '../modal/modal'
import ModalError from '../modal/modal-error/modal-error'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      }
    case SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload,
      }
    case SET_LOADER_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      }
    case PICK_BUN:
      const buns = state.ingredients.filter(
        (ingredient) => ingredient.type === 'bun'
      )
      const pickedBun = buns[Math.floor(Math.random() * buns.length)]
      return {
        ...state,
        pickedBun: pickedBun,
      }
    case PICK_PRIMARY_INGREDIENTS:
      const primaryIngredients = state.ingredients.filter(
        (ingredient) => ingredient.type !== 'bun'
      )
      const result = []
      for (let i = 0; i < action.payload.numberOfRandomIngredients; i++) {
        const randomIngredient =
          primaryIngredients[
            Math.floor(Math.random() * primaryIngredients.length)
          ]
        result.push(randomIngredient)
      }
      return {
        ...state,
        pickedPrimaryIngredients: result,
      }
    case UPDATE_ORDER_SUM:
      if (state.pickedBun) {
        const allIngredientPrices =
          state.pickedBun.price * 2 +
          state.pickedPrimaryIngredients.reduce(
            (acc, ingredient) => acc + ingredient.price,
            0
          )
        return {
          ...state,
          orderSum: allIngredientPrices,
        }
      } else {
        return state
      }
    case UPDATE_ORDER_INGREDIENTS_ID:
      if (state.orderSum > 0) {
        const bunId = state.pickedBun._id
        const primaryIngredientIds = state.pickedPrimaryIngredients.map(
          (ingredient) => ingredient._id
        )
        const updatedIngredientIds = [bunId, ...primaryIngredientIds, bunId]
        return {
          ...state,
          orderIngredientIds: updatedIngredientIds,
        }
      } else {
        return state
      }
    default:
      throw new Error(`Wrong type of action: ${action.type}`)
  }
}

function App() {
  const initialState = {
    ingredients: [],

    pickedBun: {},
    pickedPrimaryIngredients: [],

    orderSum: 0,
    orderIngredientIds: [],

    isLoading: false,
    orderDetails: {},
  }

  const [state, dispatch] = useReducer(reducer, initialState, undefined)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)

  useEffect(() => {
    api
      .getIngredients()
      .then((res) => {
        dispatch({
          type: SET_ALL_INGREDIENTS,
          payload: res.data,
        })
      })
      .catch(() => {
        handleOpenErrorModal()
      })
  }, [])

  useEffect(() => {
    if (state.ingredients) {
      dispatch({
        type: PICK_BUN,
      })

      dispatch({
        type: PICK_PRIMARY_INGREDIENTS,
        payload: {
          numberOfRandomIngredients: 8, // please choose a number of random ingredients
        },
      })
    }
  }, [state.ingredients])

  useEffect(() => {
    dispatch({
      type: UPDATE_ORDER_SUM,
    })
  }, [state.pickedBun, state.pickedPrimaryIngredients])

  useEffect(() => {
    dispatch({
      type: UPDATE_ORDER_INGREDIENTS_ID,
    })
  }, [state.orderSum])

  const handleOpenErrorModal = useCallback(() => {
    setIsErrorModalOpen(true)
  }, [])

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false)
  }

  const contextValue = useMemo(() => {
    return { state, dispatch, handleOpenErrorModal }
  }, [state, dispatch, handleOpenErrorModal])

  return (
    <AppContext.Provider value={contextValue}>
      <div className={styles.page}>
        <AppHeader />
        <main className={cn(styles.main, 'pl-5 pr-5')}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </div>
      {isErrorModalOpen && (
        <Modal onClose={handleCloseErrorModal}>
          <ModalError />
        </Modal>
      )}
    </AppContext.Provider>
  )
}

export default App
