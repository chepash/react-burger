import cn from 'classnames'
import styles from './profile-orders.module.scss'

function ProfileOrders() {
  return (
    <section
      aria-label="История заказов"
      className={cn(styles.section)}
    ></section>
  )
}

export default ProfileOrders
