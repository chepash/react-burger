import cn from 'classnames'
import ProfileNav from '../../components/profile-nav/profile-nav'
import styles from './profile-orders.module.scss'

function ProfileOrders() {
  return (
    <main className={cn(styles.main, 'pl-5 pr-5', 'mt-30')}>
      <section
        aria-label="Навигация по личному кабиенту"
        className={cn(styles.section)}
      >
        <ProfileNav />
        <p
          className={cn(
            'mt-20',
            'text',
            'text_type_main-default',
            'text_color_inactive',
            styles.section__description
          )}
        >
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </section>
      <section
        aria-label="История заказов"
        className={cn(styles.section)}
      ></section>
    </main>
  )
}

export default ProfileOrders
