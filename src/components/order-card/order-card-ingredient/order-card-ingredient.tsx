import cn from 'classnames'
import { FC } from 'react'
import { TOrderIngredient } from '../../../services/types/data'
import styles from './order-card-ingredient.module.scss'

type TOrderCardIgredientProps = {
  orderIngredient: TOrderIngredient
}

export const OrderCardIgredient: FC<TOrderCardIgredientProps> = ({
  orderIngredient,
}) => {
  return (
    <li className={cn(styles.item)}>
      <div className={cn(styles.cropper)}>
        <img
          className={cn(styles.image)}
          alt={orderIngredient.ingredient.name}
          src={orderIngredient.ingredient.image_mobile}
        />
        {orderIngredient.ingredient.type !== 'bun' &&
          orderIngredient.amount > 1 && (
            <div className={cn(styles.count, 'text text_type_main-default')}>
              +{orderIngredient.amount}
            </div>
          )}
      </div>
    </li>
  )
}

export default OrderCardIgredient
