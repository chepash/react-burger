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
import Preloader from '../../preloader/preloader'

const Checkout = () => {
  const dispatch = useDispatch()

  const { constructorIngredients, constructorBun } = useSelector(
    (store) => store.constructorState
  )

  const { isLoading, response } = useSelector((store) => store.orderState)
  const { isOrderModalOpen } = useSelector((store) => store.modalState)

  const orderSum = constructorIngredients.reduce(
    (acc, item) => acc + item.price,
    constructorBun.price * 2
  )

  const handleOrder = () => {
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
      {isOrderModalOpen && (
        <Modal onClose={handleCloseModal}>
          {isLoading && <Preloader />}
          {!isLoading && response?.success && (
            <OrderDetails orderNumber={response.order.number} />
          )}
        </Modal>
      )}
    </>
  )
}

export default Checkout
