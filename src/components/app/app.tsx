import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from '../../pages/auth/login'
import PasswordReset from '../../pages/auth/password-reset'
import PasswordRestore from '../../pages/auth/password-restore'
import Register from '../../pages/auth/register'
import HomePage from '../../pages/home-page/home-page'
import NotFound from '../../pages/not-found/not-found'
import Profile from '../../pages/profile/profile'
import { getAllIngredientsThunk } from '../../services/actions/ingredients-actions'
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
import ProfileInfo from '../profile/profile-info/profile-info'
import ProfileOrders from '../profile/profile-orders/profile-orders'
import ProtectedRouteElement from '../protected-route-element/protected-route-element'
import styles from './app.module.scss'

const App: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const background = location.state && location.state.backgroundLocation
  //@ts-ignore
  const isLoading = useSelector((store) => store.ingredientsState.isLoading)

  const fetchIngredientsError = useSelector(
    //@ts-ignore
    (store) => store.ingredientsState.error
  )
  //@ts-ignore
  const { isIngredientModalOpen } = useSelector((store) => store.modalState)
  //@ts-ignore
  const placeOrderError = useSelector((store) => store.orderState.error)

  const isErrorModalOpen = useSelector(
    //@ts-ignore
    (store) => store.modalState.isErrorModalOpen
  )

  useEffect(() => {
    //@ts-ignore
    dispatch(getUser())
  }, [])

  useEffect(() => {
    //@ts-ignore
    dispatch(getAllIngredientsThunk())
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
              <Route
                path="/login"
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<Login />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<Register />}
                  />
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<PasswordRestore />}
                  />
                }
              />
              <Route
                path="/reset-password"
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<PasswordReset />}
                  />
                }
              />

              <Route
                path="/profile"
                element={<ProtectedRouteElement element={<Profile />} />}
              >
                <Route path="" element={<ProfileInfo />} />
                <Route path="orders" element={<ProfileOrders />} />
              </Route>

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
