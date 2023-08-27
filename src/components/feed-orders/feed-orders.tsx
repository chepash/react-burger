import cn from 'classnames'
import { FC } from 'react'
import styles from './feed-orders.module.scss'
import OrderCard from '../order-card/order-card'

const FeedOrders: FC = () => {
  return (
    <section aria-label="Перечень последних выполненых заказов">
      <div className={cn(styles.section__content)}>
        <div className={cn(styles.section__content_scrollable)}>
          <ul className={cn(styles.list)}>
            <li className={cn(styles.list_item)}>
              <OrderCard />
            </li>
            <li className={cn(styles.list_item)}>
              <OrderCard />
            </li>
            <li className={cn(styles.list_item)}>
              <OrderCard />
            </li>
            <li className={cn(styles.list_item)}>
              <OrderCard />
            </li>
            <li className={cn(styles.list_item)}>
              <OrderCard />
            </li>
            <li className={cn(styles.list_item)}>
              <OrderCard />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeedOrders
