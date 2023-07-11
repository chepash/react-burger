import cn from 'classnames'
import styles from './checkout.module.scss'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import Modal from '../../modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../services/actions/order'
import { SET_IS_ORDER_MODAL_OPEN } from '../../../services/actions/modal'

const Checkout = () => {
  const dispatch = useDispatch()

  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )

  const { isLoading, response } = useSelector(
    // @ts-ignore
    (store) => store.orderState
  )
  const { isOrderModalOpen } = useSelector(
    // @ts-ignore
    (store) => store.modalState
  )

  const orderSum = constructorIngredients.reduce(
    (acc, item) => acc + item.price,
    constructorBun.price * 2
  )

  const handleOrder = () => {
    // @ts-ignore
    dispatch(createOrder(constructorIngredients, constructorBun))
    dispatch({ type: SET_IS_ORDER_MODAL_OPEN, payload: true })
  }

  const handleCloseModal = () => {
    dispatch({ type: SET_IS_ORDER_MODAL_OPEN, payload: false })
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
