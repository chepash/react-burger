import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from '../../services/types/store'
import OrderCard from '../order-card/order-card'
import styles from './feed-orders.module.scss'

const FeedOrders: FC = () => {
  const feedOrders = useSelector((store) => store.feedState.response.orders)

  return (
    <section aria-label="Перечень последних выполненых заказов">
      <div className={cn(styles.section__content)}>
        <div className={cn(styles.section__content_scrollable)}>
          <ul className={cn(styles.list)}>
            {feedOrders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeedOrders
