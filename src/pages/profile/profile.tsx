import cn from 'classnames'
import { FC } from 'react'
import { Outlet, useLocation, useMatch } from 'react-router-dom'
import ProfileNav from '../../components/profile/profile-nav/profile-nav'
import styles from './profile.module.scss'

const Profile: FC = () => {
  const isUserOrderDetailsPage = useMatch('/profile/orders/:id')
  const location = useLocation()

  type TSectionDescriptions = {
    '/profile': string
    '/profile/orders': string
  }

  const sectionDescriptions: TSectionDescriptions = {
    '/profile': 'В этом разделе вы можете изменить свои персональные данные',
    '/profile/orders':
      'В этом разделе вы можете просмотреть свою историю заказов',
  }

  const currentSectionDescription =
    sectionDescriptions[location.pathname as keyof TSectionDescriptions] || ''

  if (isUserOrderDetailsPage) {
    return <Outlet />
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
          {currentSectionDescription}
        </p>
      </section>
      <Outlet />
    </main>
  )
}

export default Profile
