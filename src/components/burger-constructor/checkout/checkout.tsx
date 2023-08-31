import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { setIsPlacedNewOrderModalOpenAction } from '../../../services/actions/modal-actions'
import { getConstructorState } from '../../../services/selectors/constructor-selectors'
import { getModalState } from '../../../services/selectors/modal-selectors'
import { getOrderState } from '../../../services/selectors/order-selectors'
import { getUser } from '../../../services/selectors/user-selectors'
import { createOrderThunk } from '../../../services/thunks/create-order-thunk'
import { useDispatch, useSelector } from '../../../services/types/store'
import Modal from '../../modal/modal'
import Preloader from '../../preloader/preloader'
import OrderStatusResponse from '../order-status-response/order-status-response'
import styles from './checkout.module.scss'

const Checkout: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { constructorIngredients, constructorBun } =
    useSelector(getConstructorState)
  const isLoggedIn = useSelector(getUser)
  const { isLoading, response } = useSelector(getOrderState)
  const { isPlacedNewOrderModalOpen } = useSelector(getModalState)

  const orderSum = constructorIngredients.reduce(
    (acc, ingredientWithUUID) => acc + ingredientWithUUID.ingredient.price,
    constructorBun.price * 2
  )

  const handleOrder = () => {
    if (isLoggedIn) {
      dispatch(createOrderThunk(constructorIngredients, constructorBun))
      dispatch(setIsPlacedNewOrderModalOpenAction(true))
    } else {
      navigate('/login')
    }
  }

  const handleCloseModal = () => {
    dispatch(setIsPlacedNewOrderModalOpenAction(false))
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
      {isPlacedNewOrderModalOpen && (
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
