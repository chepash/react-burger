import cn from 'classnames'
import { FC } from 'react'
import styles from './order-card.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const OrderCard: FC = () => {
  const listItems = []
  for (let i = 0; i < 10; i++) {
    listItems.push(
      <li key={i} className={cn(styles.list__item)}>
        <div className={cn(styles.wrapper)}>
          <img
            className={cn(styles.image)}
            alt={'ингредиент'}
            src={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
          />
          {i > 6 && (
            <div className={cn(styles.count, 'text text_type_main-default')}>
              +{i}
            </div>
          )}
        </div>
      </li>
    )
  }

  return (
    <div className={cn(styles.card, 'p-6')}>
      <div className={cn(styles.card__header)}>
        <div className={cn('text text_type_digits-default')}>#034535</div>
        <div className={cn('text text_type_main-default text_color_inactive')}>
          Сегодня, 16:20
        </div>
      </div>
      <div className={cn(styles.name, 'mt-4')}>
        Death Star Starship Main бургер
      </div>
      <div className={cn(styles.status, 'mt-2', 'text text_type_main-small')}>
        Готовится
      </div>
      <div className={cn(styles.card__footer, 'mt-4')}>
        <ul className={cn(styles.list)}>{listItems}</ul>
        <div className={cn(styles.price, 'text text_type_digits-default')}>
          666 <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}

export default OrderCard
