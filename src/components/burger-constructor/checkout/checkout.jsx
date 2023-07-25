import cn from 'classnames'
import styles from './checkout.module.scss'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import Modal from '../../modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../services/actions/order-actions'
import { SET_IS_ORDER_MODAL_OPEN } from '../../../services/actions/modal-actions'
import Preloader from '../../preloader/preloader'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { constructorIngredients, constructorBun } = useSelector(
    (store) => store.constructorState
  )
  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)

  const { isLoading, response } = useSelector((store) => store.orderState)
  const { isOrderModalOpen } = useSelector((store) => store.modalState)

  const orderSum = constructorIngredients.reduce(
    (acc, item) => acc + item.price,
    constructorBun.price * 2
  )

  const handleOrder = () => {
    if (isLoggedIn) {
      dispatch(createOrder(constructorIngredients, constructorBun))
      dispatch({ type: SET_IS_ORDER_MODAL_OPEN, payload: true })
    } else {
      navigate('/login')
    }
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
          disabled={!constructorBun._id}
        >
          Оформить заказ
        </Button>
      </div>
      {isOrderModalOpen && (
        <Modal
          onClose={handleCloseModal}
          header={isLoading ? 'Оформление заказа...' : ''}
        >
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
