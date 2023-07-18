import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/home-page/home-page'
import { getAllIngredients } from '../../services/actions/ingredients'
import { SET_IS_ERROR_MODAL_OPEN } from '../../services/actions/modal'
import AppHeader from '../app-header/app-header'
import Modal from '../modal/modal'
import ModalError from '../modal/modal-error/modal-error'
import Preloader from '../preloader/preloader'
import styles from './app.module.scss'
import Login from '../../pages/login/login'

function App() {
  const dispatch = useDispatch()

  const isLoading = useSelector((store) => store.ingredientsState.isLoading)

  const fetchIngredientsError = useSelector(
    (store) => store.ingredientsState.error
  )

  const placeOrderError = useSelector((store) => store.orderState.error)

  const isErrorModalOpen = useSelector(
    (store) => store.modalState.isErrorModalOpen
  )

  useEffect(() => {
    dispatch(getAllIngredients())
  }, [dispatch])

  useEffect(() => {
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

        {isLoading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<PersonPage />} />
        <Route path="/reset-password" element={<PersonPage />} />
        <Route path="/profile" element={<PersonPage />} />
        <Route path="/ingredients/:id" element={<PersonPage />} />
        <Route path="*" element={<NotFound404 />} /> */}
          </Routes>
        )}
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
