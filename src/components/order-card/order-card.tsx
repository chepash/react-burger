import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  setCurrentOrderDetailsAction,
  setIsOrderDetailsModalOpenAction,
} from '../../services/actions/modal-actions'
import { getIngredients } from '../../services/selectors/ingredients-selectors'
import { useDispatch, useSelector } from '../../services/types/store'
import { OrderStatus, TOrder } from '../../services/types/ws-data'
import { ROUTE_FEED, ROUTE_PROFILE_ORDERS } from '../../utils/constants'
import {
  formatUpdatedAtTime,
  transformOrderIngredientsList,
} from '../../utils/utils-functions'
import OrderCardIgredient from './order-card-ingredient/order-card-ingredient'
import styles from './order-card.module.scss'

type TOrderCardProps = {
  order: TOrder
}

const OrderCard: FC<TOrderCardProps> = ({ order }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const detailedIngredientsData = useSelector(getIngredients)

  const orderIngredients = transformOrderIngredientsList(
    order.ingredients,
    detailedIngredientsData
  )

  const orderSum = orderIngredients.reduce(
    (acc, item) => acc + item.ingredient.price * item.amount,
    0
  )

  const currentOrderStatusText = OrderStatus[order.status] || ''

  const onClick = () => {
    dispatch(
      setCurrentOrderDetailsAction({
        originalOrderInfo: order,
        orderIngredients,
        orderSum,
      })
    )
    dispatch(setIsOrderDetailsModalOpenAction(true))

    const currentPath = location.pathname
    const newPath = currentPath.includes(ROUTE_FEED)
      ? `${ROUTE_FEED}/${order._id}`
      : `${ROUTE_PROFILE_ORDERS}/${order._id}`

    navigate(newPath, {
      state: { backgroundLocation: location },
    })
  }

  return (
    <li className={cn(styles.card, 'p-6')} onClick={onClick}>
      <div className={cn(styles.card__header)}>
        <p className={cn('text text_type_digits-default')}>#{order.number}</p>
        <p className={cn('text text_type_main-default text_color_inactive')}>
          {formatUpdatedAtTime(order.updatedAt)}
        </p>
      </div>
      <p className={cn(styles.name, 'text text_type_main-default', 'mt-6')}>
        {order.name}
      </p>

      {location.pathname === ROUTE_PROFILE_ORDERS && (
        <p
          className={cn('mt-2', 'text text_type_main-small', {
            [styles.status_created]: order.status === 'created',
            [styles.status_pending]: order.status === 'pending',
            [styles.status_done]: order.status === 'done',
          })}
        >
          {currentOrderStatusText}
        </p>
      )}
      <div className={cn(styles.card__footer, 'mt-6')}>
        <ul className={cn(styles.list)}>
          {orderIngredients
            .map((item) => (
              <OrderCardIgredient
                key={item.ingredient._id}
                orderIngredient={item}
              />
            ))
            .reverse()}
        </ul>
        <div className={cn(styles.price, 'text text_type_digits-default')}>
          {orderSum} <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )
}

export default OrderCard
