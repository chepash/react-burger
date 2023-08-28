import cn from 'classnames'
import styles from './profile-orders.module.scss'
import { FC } from 'react'
import OrderCard from '../../order-card/order-card'

const ProfileOrders: FC = () => {
  return (
    <section aria-label="История заказов" className={cn(styles.section)}>
      <div className={cn(styles.section_scrollable)}>
        <ul className={cn(styles.list)}>
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
          <li>
            <OrderCard />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProfileOrders
