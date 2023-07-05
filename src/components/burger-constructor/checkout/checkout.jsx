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

const Checkout = () => {
  const { state, handleOrder } = useContext(AppContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOnClick = () => {
    handleOrder()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
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
          onClick={handleOnClick}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && !state.isLoading && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails orderNumber={state.orderDetails.order.number} />
        </Modal>
      )}
    </>
  )
}

export default Checkout
