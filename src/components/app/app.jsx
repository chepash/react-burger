import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/auth/login'
import PasswordReset from '../../pages/auth/password-reset'
import PasswordRestore from '../../pages/auth/password-restore'
import Register from '../../pages/auth/register'
import HomePage from '../../pages/home-page/home-page'
import Profile from '../../pages/profile/profile'
import { getAllIngredients } from '../../services/actions/ingredients-actions'
import { SET_IS_ERROR_MODAL_OPEN } from '../../services/actions/modal-actions'
import { getUser } from '../../services/actions/user-actions'
import AppHeader from '../app-header/app-header'
import Modal from '../modal/modal'
import ModalError from '../modal/modal-error/modal-error'
import Preloader from '../preloader/preloader'
import styles from './app.module.scss'
import { ProtectedRouteElement } from '../protected-route-element/protected-route-element'

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
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      dispatch(getUser())
    }
  }, [])

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
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<PasswordRestore />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            <Route
              path="/profile"
              element={<ProtectedRouteElement element={<Profile />} />}
            />
            {/* <Route path="/ingredients/:id" element={<Modal />} />
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
