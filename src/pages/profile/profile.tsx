import cn from 'classnames'
import { FC } from 'react'
import { Outlet, useLocation, useMatch } from 'react-router-dom'
import ProfileNav from '../../components/profile/profile-nav/profile-nav'
import { ROUTE_PROFILE_ORDER_DETAILS } from '../../utils/constants'
import styles from './profile.module.scss'

const Profile: FC = () => {
  const isUserOrderDetailsPage = useMatch(ROUTE_PROFILE_ORDER_DETAILS)
  const location = useLocation()

  enum Section {
    Profile = '/profile',
    Orders = '/profile/orders',
  }

  const sectionDescriptions: Record<Section, string> = {
    [Section.Profile]:
      'В этом разделе вы можете изменить свои персональные данные',
    [Section.Orders]:
      'В этом разделе вы можете просмотреть свою историю заказов',
  }

  const currentSectionDescription =
    sectionDescriptions[location.pathname as Section] || ''

  if (isUserOrderDetailsPage) {
    return (
      <main className={cn(styles.order, 'pt-10')}>
        <Outlet />
      </main>
    )
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
