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
import {
  setCurrentIngredientAction,
  setCurrentOrderDetailsAction,
  setIsErrorModalOpenAction,
  setIsIngredientModalOpenAction,
  setIsOrderDetailsModalOpenAction,
} from '../../services/actions/modal-actions'
import { getIngredientsState } from '../../services/selectors/ingredients-selectors'
import { getModalState } from '../../services/selectors/modal-selectors'
import { getOrderState } from '../../services/selectors/order-selectors'
import { getFeedOrders } from '../../services/selectors/ws-feed-selectors'
import { getUserOrdersHistory } from '../../services/selectors/ws-user-history-selectors'
import { getAllIngredientsThunk } from '../../services/thunks/get-all-ingredients-thunk'
import { getUserThunk } from '../../services/thunks/get-user-thunk'
import { useDispatch, useSelector } from '../../services/types/store'
import {
  ROUTE_FEED,
  ROUTE_FEED_ORDER_DETAILS,
  ROUTE_FORGOT_PASSWORD,
  ROUTE_HOME,
  ROUTE_INGREDIENT_DETAILS,
  ROUTE_LOGIN,
  ROUTE_NOT_FOUND,
  ROUTE_PROFILE,
  ROUTE_PROFILE_ORDER_DETAILS,
  ROUTE_REGISTER,
  ROUTE_RESET_PASSWORD,
  SUBROUTE_ID,
  SUBROUTE_ORDERS,
} from '../../utils/constants'
import AppHeader from '../app-header/app-header'
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import ModalError from '../modal/modal-error/modal-error'
import OrderDetails from '../order-details/order-details'
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

  const { isOrderDetailsModalOpen, isIngredientModalOpen, isErrorModalOpen } =
    useSelector(getModalState)

  const { isLoading, isError: fetchIngredientsError } =
    useSelector(getIngredientsState)

  const { isError: placeOrderError } = useSelector(getOrderState)

  const feedOrders = useSelector(getFeedOrders)
  const userOrdersHistory = useSelector(getUserOrdersHistory)

  useEffect(() => {
    dispatch(getUserThunk())
  }, [])

  useEffect(() => {
    dispatch(getAllIngredientsThunk())
  }, [])

  useEffect(() => {
    if (fetchIngredientsError || placeOrderError) {
      dispatch(setIsErrorModalOpenAction(true))
    }
  }, [dispatch, fetchIngredientsError, placeOrderError])

  const handleCloseErrorModal = () => {
    dispatch(setIsErrorModalOpenAction(false))
  }

  const handleCloseIngredientModal = () => {
    dispatch(setCurrentIngredientAction(null))
    dispatch(setIsIngredientModalOpenAction(false))
    navigate(ROUTE_HOME)
  }

  const handleCloseOrderDetailstModal = () => {
    dispatch(setCurrentOrderDetailsAction(null))
    dispatch(setIsOrderDetailsModalOpenAction(false))
    navigate(-1)
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
              <Route path={ROUTE_HOME} element={<HomePage />} />
              <Route path={ROUTE_FEED} element={<Feed />}>
                <Route
                  path={SUBROUTE_ID}
                  element={<OrderDetails orders={feedOrders} />}
                />
              </Route>

              <Route
                path={ROUTE_LOGIN}
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<Login />}
                  />
                }
              />
              <Route
                path={ROUTE_REGISTER}
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<Register />}
                  />
                }
              />
              <Route
                path={ROUTE_FORGOT_PASSWORD}
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<PasswordRestore />}
                  />
                }
              />
              <Route
                path={ROUTE_RESET_PASSWORD}
                element={
                  <ProtectedRouteElement
                    onlyUnAuth={true}
                    element={<PasswordReset />}
                  />
                }
              />

              <Route
                path={ROUTE_PROFILE}
                element={<ProtectedRouteElement element={<Profile />} />}
              >
                <Route path="" element={<ProfileInfo />} />
                <Route path={SUBROUTE_ORDERS} element={<ProfileOrders />}>
                  <Route
                    path={SUBROUTE_ID}
                    element={<OrderDetails orders={userOrdersHistory} />}
                  />
                </Route>
              </Route>

              <Route
                path={ROUTE_INGREDIENT_DETAILS}
                element={<IngredientDetails />}
              />

              <Route path={ROUTE_NOT_FOUND} element={<NotFound />} />
            </Routes>

            {background && isIngredientModalOpen && (
              <Routes>
                <Route
                  path={ROUTE_INGREDIENT_DETAILS}
                  element={
                    <Modal
                      header="Детали ингредиента"
                      onClose={handleCloseIngredientModal}
                    >
                      <IngredientDetails />
                    </Modal>
                  }
                />
              </Routes>
            )}

            {background && isOrderDetailsModalOpen && (
              <Routes>
                <Route
                  path={ROUTE_FEED_ORDER_DETAILS}
                  element={
                    <Modal onClose={handleCloseOrderDetailstModal}>
                      <OrderDetails orders={feedOrders} />
                    </Modal>
                  }
                />
              </Routes>
            )}

            {background && isOrderDetailsModalOpen && (
              <Routes>
                <Route
                  path={ROUTE_PROFILE_ORDER_DETAILS}
                  element={
                    <ProtectedRouteElement
                      element={
                        <Modal onClose={handleCloseOrderDetailstModal}>
                          <OrderDetails orders={userOrdersHistory} />
                        </Modal>
                      }
                    />
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
