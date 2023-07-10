import { useState, useContext } from 'react'
import { AppContext } from '../../../services/appContext'
import cn from 'classnames'
import styles from './checkout.module.scss'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import Modal from '../../modal/modal'
import { SET_LOADER_STATUS, SET_ORDER_DETAILS } from '../../../utils/constants'
import * as api from '../../../utils/api'

const Checkout = () => {
  const { state, dispatch, handleOpenErrorModal } = useContext(AppContext)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const handleOrder = () => {
    dispatch({
      type: SET_LOADER_STATUS,
      payload: true,
    })

    api
      .createOrder(state.orderIngredientIds)
      .then((orderDetails) => {
        dispatch({
          type: SET_ORDER_DETAILS,
          payload: orderDetails,
        })
        setIsOrderModalOpen(true)
      })
      .catch(() => {
        handleOpenErrorModal()
      })
      .finally(() => {
        dispatch({
          type: SET_LOADER_STATUS,
          payload: false,
        })
      })
  }

  const handleCloseModal = () => {
    setIsOrderModalOpen(false)
  }

  return (
    <>
      <div className={cn(styles.checkout, 'mt-10', 'pr-4')}>
        <p
          className={cn(
            styles.checkout__price,
            'text text_type_digits-medium',
            'mr-10'
          )}
        >
          {state.orderSum}
          <CurrencyIcon type="primary" />
        </p>
        <Button
          onClick={handleOrder}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {isOrderModalOpen && !state.isLoading && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails orderNumber={state.orderDetails.order.number} />
        </Modal>
      )}
    </>
  )
}

export default Checkout
