import cn from 'classnames'
import styles from './checkout.module.scss'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import Modal from '../../modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { CLOSE_ORDER_MODAL, createOrder } from '../../../services/actions/order'

const Checkout = () => {
  const dispatch = useDispatch()

  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )

  const { isLoading, response, isOrderModalOpen } = useSelector(
    // @ts-ignore
    (store) => store.orderState
  )

  const orderSum = constructorIngredients.reduce(
    (acc, item) => acc + item.price,
    constructorBun.price * 2
  )

  const handleOrder = () => {
    // @ts-ignore
    dispatch(createOrder(constructorIngredients, constructorBun))
  }

  const handleCloseModal = () => {
    dispatch({ type: CLOSE_ORDER_MODAL })
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
          {orderSum}
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
      {!isLoading && response?.success && isOrderModalOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails orderNumber={response.order.number} />
        </Modal>
      )}
    </>
  )
}

export default Checkout
