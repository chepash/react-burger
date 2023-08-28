import { FC, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from '../../pages/auth/login'
import PasswordReset from '../../pages/auth/password-reset'
import PasswordRestore from '../../pages/auth/password-restore'
import Register from '../../pages/auth/register'
import Feed from '../../pages/feed/feed'
import HomePage from '../../pages/home-page/home-page'
import NotFound from '../../pages/not-found/not-found'
import Profile from '../../pages/profile/profile'
import { getAllIngredientsThunk } from '../../services/actions/ingredients-actions'
import {
  setCurrentIngredientAction,
  setIsErrorModalOpenAction,
  setIsIngredientModalOpenAction,
} from '../../services/actions/modal-actions'
import { getUserThunk } from '../../services/actions/user-actions'
import { useDispatch, useSelector } from '../../services/types/store'
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

  const isLoading = useSelector((store) => store.ingredientsState.isLoading)

  const fetchIngredientsError = useSelector(
    (store) => store.ingredientsState.isError
  )

  const { isIngredientModalOpen } = useSelector((store) => store.modalState)

  const placeOrderError = useSelector((store) => store.orderState.isError)

  const isErrorModalOpen = useSelector(
    (store) => store.modalState.isErrorModalOpen
  )

  useEffect(() => {
    dispatch(getUserThunk())
  }, [])

  useEffect(() => {
    dispatch(getAllIngredientsThunk())
  }, [dispatch])

  useEffect(() => {
    if (fetchIngredientsError || placeOrderError) {
      dispatch(setIsErrorModalOpenAction(true))
    }
  }, [dispatch, fetchIngredientsError, placeOrderError])

  const handleCloseErrorModal = () => {
    dispatch(setIsErrorModalOpenAction(false))
  }

  const handleCloseModal = () => {
    dispatch(setCurrentIngredientAction(null))
    dispatch(setIsIngredientModalOpenAction(false))
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
              <Route path="/feed" element={<Feed />} />
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
