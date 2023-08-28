import cn from 'classnames'
import { FC } from 'react'
import styles from './order-card.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { TOrder } from '../../services/reducers/feed-reducer'
import { useLocation } from 'react-router-dom'
import {
  formatUpdatedAtTime,
  transformOrderIngredientsList,
} from '../../utils/utils-functions'
import { useSelector } from '../../services/types/store'
import OrderCardIgredient from './order-card-ingredient/order-card-ingredient'

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

  return (
    <li className={cn(styles.card, 'p-6')}>
      <div className={cn(styles.card__header)}>
        <div className={cn('text text_type_digits-default')}>
          #{order.number}
        </div>
        <div className={cn('text text_type_main-default text_color_inactive')}>
          {formatUpdatedAtTime(order.updatedAt)}
        </div>
      </div>
      <div className={cn(styles.name, 'mt-4')}>{order.name}</div>

      {location.pathname === '/profile/orders' && (
        <div className={cn(styles.status, 'mt-2', 'text text_type_main-small')}>
          Готов
        </div>
      )}
      <div className={cn(styles.card__footer, 'mt-4')}>
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
