import cn from 'classnames'
import styles from './app.module.scss'
import { useEffect } from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Modal from '../modal/modal'
import ModalError from '../modal/modal-error/modal-error'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIngredients } from '../../services/actions/ingredients'
import { SET_IS_ERROR_MODAL_OPEN } from '../../services/actions/modal'

function App() {
  const dispatch = useDispatch()

  // @ts-ignore
  const isLoading = useSelector((store) => store.ingredientsState.isLoading)

  const fetchIngredientsError = useSelector(
    // @ts-ignore
    (store) => store.ingredientsState.error
  )
  // @ts-ignore
  const placeOrderError = useSelector((store) => store.orderState.error)

  const isErrorModalOpen = useSelector(
    // @ts-ignore
    (store) => store.modalState.isErrorModalOpen
  )

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllIngredients())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // @ts-ignore
    if (fetchIngredientsError || placeOrderError) {
      dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: true })
    }
  }, [dispatch, fetchIngredientsError, placeOrderError])

  const handleCloseErrorModal = () => {
    dispatch({ type: SET_IS_ERROR_MODAL_OPEN, payload: false })
  }

  return (
    <>
      <div className={styles.page}>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      </div>

      {isErrorModalOpen && (
        <Modal onClose={handleCloseErrorModal}>
          <ModalError />
        </Modal>
      )}
    </>
  )
}

export default App
