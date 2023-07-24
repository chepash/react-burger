import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from '../../pages/auth/login'
import PasswordReset from '../../pages/auth/password-reset'
import PasswordRestore from '../../pages/auth/password-restore'
import Register from '../../pages/auth/register'
import HomePage from '../../pages/home-page/home-page'
import NotFound from '../../pages/not-found/not-found'
import Profile from '../../pages/profile/profile'
import { getAllIngredients } from '../../services/actions/ingredients-actions'
import {
  SET_CURRENT_INGREDIENT,
  SET_IS_ERROR_MODAL_OPEN,
  SET_IS_INGREDIENT_MODAL_OPEN,
} from '../../services/actions/modal-actions'
import { getUser } from '../../services/actions/user-actions'
import AppHeader from '../app-header/app-header'
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import ModalError from '../modal/modal-error/modal-error'
import Preloader from '../preloader/preloader'
import { ProtectedRouteElement } from '../protected-route-element/protected-route-element'
import styles from './app.module.scss'
import ProfileOrders from '../../pages/profile-orders/profile-orders'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const background = location.state && location.state.backgroundLocation

  const isLoading = useSelector((store) => store.ingredientsState.isLoading)

  const fetchIngredientsError = useSelector(
    (store) => store.ingredientsState.error
  )

  const { isIngredientModalOpen } = useSelector((store) => store.modalState)

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

  const handleCloseModal = () => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: null })
    dispatch({ type: SET_IS_INGREDIENT_MODAL_OPEN, payload: false })
    navigate('/')
  }

  return (
    <>
      <div className={styles.page}>
        <AppHeader />

        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Routes location={background || location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<PasswordRestore />} />
              <Route path="/reset-password" element={<PasswordReset />} />
              <Route
                path="/profile"
                element={<ProtectedRouteElement element={<Profile />} />}
              />
              <Route
                path="/profile/orders"
                element={<ProtectedRouteElement element={<ProfileOrders />} />}
              />
              <Route
                path="/ingredients/:id"
                element={
                  <>
                    <IngredientDetails />
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {background && isIngredientModalOpen && (
              <Routes>
                <Route
                  path="/ingredients/:id"
                  element={
                    <Modal
                      header="Детали ингредиента"
                      onClose={handleCloseModal}
                    >
                      <IngredientDetails />
                    </Modal>
                  }
                />
              </Routes>
            )}
          </>
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
