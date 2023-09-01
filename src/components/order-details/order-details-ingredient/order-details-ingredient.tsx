import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { TOrderIngredient } from '../../../services/types/ws-data'
import styles from './order-details-ingredient.module.scss'

type TOrderDetailsIngredientProps = {
  orderIngredient: TOrderIngredient
}

export const OrderDetailsIngredient: FC<TOrderDetailsIngredientProps> = ({
  orderIngredient,
}) => {
  return (
    <li className={cn(styles.item)}>
      <div className={cn(styles.img__wrapper)}>
        <div className={cn(styles.img__cropper)}>
          <img
            className={cn(styles.img)}
            alt={orderIngredient.ingredient.name}
            src={orderIngredient.ingredient.image_mobile}
          />
        </div>
      </div>
      <p className={cn(styles.name, 'text', 'text_type_main-default', 'ml-4')}>
        {orderIngredient.ingredient.name}
      </p>
      <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
        {orderIngredient.amount} x {orderIngredient.ingredient.price}{' '}
        <CurrencyIcon type="primary" />
      </p>
    </li>
  )
}

export default OrderDetailsIngredient
