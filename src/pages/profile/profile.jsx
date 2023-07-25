import cn from 'classnames'
import { Outlet, useLocation } from 'react-router-dom'
import ProfileNav from '../../components/profile/profile-nav/profile-nav'
import styles from './profile.module.scss'

function Profile() {
  const location = useLocation()

  const sectionDescriptions = {
    '/profile': 'В этом разделе вы можете изменить свои персональные данные',
    '/profile/orders':
      'В этом разделе вы можете просмотреть свою историю заказов',
  }

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
          {sectionDescriptions[location.pathname] || ''}
        </p>
      </section>
      <Outlet />
    </main>
  )
}

export default Profile
