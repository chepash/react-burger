import cn from 'classnames'
import styles from './app.module.scss'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect } from 'react'

import Modal from '../modal/modal'
import ModalError from '../modal/modal-error/modal-error'
import { useDispatch, useSelector } from 'react-redux'
import {
  IGNORE_INGREDIENTS_ERROR,
  getAllIngredients,
} from '../../services/actions/ingredients'
import { IGNORE_ORDER_ERROR } from '../../services/actions/order'

function App() {
  const dispatch = useDispatch()

  // @ts-ignore
  const isLoading = useSelector((store) => store.ingredientsState.isLoading)

  const ingredientsFetchError = useSelector(
    // @ts-ignore
    (store) => store.ingredientsState.error
  )

  const orderError = useSelector(
    // @ts-ignore
    (store) => store.orderState.error
  )

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllIngredients())
  }, [])

  const handleCloseErrorModal = () => {
    // @ts-ignore
    dispatch({ type: IGNORE_INGREDIENTS_ERROR })
    dispatch({ type: IGNORE_ORDER_ERROR })
  }

  return (
    <>
      <div className={styles.page}>
        <AppHeader />
        <main className={cn(styles.main, 'pl-5 pr-5')}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          )}
        </main>
      </div>
      {(ingredientsFetchError || orderError) && (
        <Modal onClose={handleCloseErrorModal}>
          <ModalError />
        </Modal>
      )}
    </>
  )
}

export default App
