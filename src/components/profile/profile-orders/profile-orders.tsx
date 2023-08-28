import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from '../../../services/types/store'
import OrderCard from '../../order-card/order-card'
import styles from './profile-orders.module.scss'

const ProfileOrders: FC = () => {
  const orderHistory = useSelector((store) => store.feedState.response.orders)

  return (
    <section aria-label="История заказов" className={cn(styles.section)}>
      <div className={cn(styles.section_scrollable)}>
        <ul className={cn(styles.list)}>
          {orderHistory.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProfileOrders
