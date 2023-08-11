import cn from 'classnames'
import styles from './profile-orders.module.scss'
import { FC } from 'react'

const ProfileOrders: FC = () => {
  return (
    <section
      aria-label="История заказов"
      className={cn(styles.section)}
    ></section>
  )
}

export default ProfileOrders
