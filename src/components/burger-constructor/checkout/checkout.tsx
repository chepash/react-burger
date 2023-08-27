import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { setIsOrderModalOpenAction } from '../../../services/actions/modal-actions'
import { createOrderThunk } from '../../../services/actions/order-actions'
import { useDispatch, useSelector } from '../../../services/types/hooks'
import Modal from '../../modal/modal'
import Preloader from '../../preloader/preloader'
import OrderStatusResponse from '../order-status-response/order-status-response'
import styles from './checkout.module.scss'

const Checkout: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { constructorIngredients, constructorBun } = useSelector(
    (store) => store.constructorState
  )
  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)
  const { isLoading, response } = useSelector((store) => store.orderState)
  const { isOrderModalOpen } = useSelector((store) => store.modalState)

  const orderSum = constructorIngredients.reduce(
    (acc, ingredientWithUUID) => acc + ingredientWithUUID.ingredient.price,
    constructorBun.price * 2
  )

  const handleOrder = () => {
    if (isLoggedIn) {
      dispatch(createOrderThunk(constructorIngredients, constructorBun))
      dispatch(setIsOrderModalOpenAction(true))
    } else {
      navigate('/login')
    }
  }

  const handleCloseModal = () => {
    dispatch(setIsOrderModalOpenAction(false))
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
            <OrderStatusResponse orderNumber={response.order.number} />
          )}
        </Modal>
      )}
    </>
  )
}

export default Checkout
