import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { TOrder } from '../../services/reducers/feed-reducer'
import { useSelector } from '../../services/types/store'
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
  const detailedIngredientsData = useSelector(
    (store) => store.ingredientsState.ingredients
  )

  const orderIngredients = transformOrderIngredientsList(
    order.ingredients,
    detailedIngredientsData
  )

  const orderSum = orderIngredients.reduce(
    (acc, item) => acc + item.ingredient.price * item.amount,
    0
  )

  type TStatusText = {
    created: string
    pending: string
    done: string
  }

  const statusText: TStatusText = {
    created: 'Принят',
    pending: 'Готовится',
    done: 'Выполнен',
  }

  const currentOrderStatusText =
    statusText[order.status as keyof TStatusText] || ''

  return (
    <li className={cn(styles.card, 'p-6')}>
      <div className={cn(styles.card__header)}>
        <p className={cn('text text_type_digits-default')}>#{order.number}</p>
        <p className={cn('text text_type_main-default text_color_inactive')}>
          {formatUpdatedAtTime(order.updatedAt)}
        </p>
      </div>
      <p className={cn(styles.name, 'text text_type_main-default', 'mt-6')}>
        {order.name}
      </p>

      {location.pathname === '/profile/orders' && (
        <p
          className={cn(styles.status, 'mt-2', 'text text_type_main-small', {
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
          {orderIngredients.reverse().map((item) => (
            <OrderCardIgredient
              key={item.ingredient._id}
              orderIngredient={item}
            />
          ))}
        </ul>
        <div className={cn(styles.price, 'text text_type_digits-default')}>
          {orderSum} <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )
}

export default OrderCard
