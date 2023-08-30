import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { setCurrentOrderDetailsAction } from '../../services/actions/modal-actions'
import { useDispatch, useSelector } from '../../services/types/store'
import { OrderStatus, TOrder } from '../../services/types/ws-data'
import {
  formatUpdatedAtTime,
  transformOrderIngredientsList,
} from '../../utils/utils-functions'
import OrderDetailsIngredient from './order-details-ingredient/order-details-ingredient'
import styles from './order-details.module.scss'

type TOrderDetailsProps = {
  orders: TOrder[]
}

const OrderDetails: FC<TOrderDetailsProps> = ({ orders }) => {
  const dispatch = useDispatch()
  const location = useLocation()

  const background = location.state && location.state.backgroundLocation

  const currentOrderDetails = useSelector(
    (store) => store.modalState.currentOrderDetails
  )
  const detailedIngredientsData = useSelector(
    (store) => store.ingredientsState.ingredients
  )
  const { id } = useParams()

  useEffect(() => {
    const order = orders.find((item) => item._id.toString() === id)

    if (id && order) {
      const orderIngredients = transformOrderIngredientsList(
        order.ingredients,
        detailedIngredientsData
      )

      const orderSum = orderIngredients.reduce(
        (acc, item) => acc + item.ingredient.price * item.amount,
        0
      )
      if (order) {
        dispatch(
          setCurrentOrderDetailsAction({
            originalOrderInfo: order,
            orderIngredients,
            orderSum,
          })
        )
      }
    }
  }, [dispatch, id, orders, detailedIngredientsData])

  if (!currentOrderDetails) {
    return null
  }

  const orderStatus = currentOrderDetails.originalOrderInfo.status
  const orderName = currentOrderDetails.originalOrderInfo.name

  const currentOrderStatusText = OrderStatus[orderStatus] || ''

  return (
    currentOrderDetails && (
      <div className={cn(styles.card, 'mt-15', 'mb-15')}>
        <p
          className={cn('text', 'text_type_digits-default', 'mb-10', {
            [styles.centered]: !background,
          })}
        >
          #{currentOrderDetails.originalOrderInfo.number}
        </p>
        <p className={cn('text text_type_main-medium', 'mb-3')}>{orderName}</p>

        <p
          className={cn('text text_type_main-small', 'mb-15', {
            [styles.status_created]: orderStatus === 'created',
            [styles.status_pending]: orderStatus === 'pending',
            [styles.status_done]: orderStatus === 'done',
          })}
        >
          {currentOrderStatusText}
        </p>

        <p className={cn('text', 'text_type_main-medium', 'mb-6')}>Состав:</p>

        <div className={cn(styles.card__ingredients, 'mb-10')}>
          <ul className={cn(styles.list)}>
            {currentOrderDetails.orderIngredients.map((item) => (
              <OrderDetailsIngredient
                key={item.ingredient._id}
                orderIngredient={item}
              />
            ))}
          </ul>
        </div>

        <div className={cn(styles.card__footer)}>
          <p
            className={cn(
              'text',
              'text_type_main-small',
              'text_color_inactive'
            )}
          >
            {formatUpdatedAtTime(
              currentOrderDetails.originalOrderInfo.updatedAt
            )}
          </p>
          <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
            {currentOrderDetails.orderSum} <CurrencyIcon type="primary" />
          </p>
        </div>
      </div>
    )
  )
}

export default OrderDetails
