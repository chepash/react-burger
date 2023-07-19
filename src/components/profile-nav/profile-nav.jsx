import cn from 'classnames'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './profile-nav.module.scss'

function ProfileNav() {
  const location = useLocation()

  return (
    <nav className={cn(styles.nav)}>
      <ul className={cn(styles.list)}>
        <li className={cn(styles.list__item)}>
          <Link
            to={'/profile'}
            className={cn(
              styles.link,
              'text',
              'text_type_main-medium',
              'text_color_inactive',
              {
                [styles.link_active]: location.pathname === '/profile',
              }
            )}
          >
            Профиль
          </Link>
        </li>
        <li className={cn(styles.list__item)}>
          <NavLink
            to={'/profile/orders'}
            className={cn(
              styles.link,
              'text',
              'text_type_main-medium',
              'text_color_inactive',
              {
                [styles.link_active]: location.pathname === '/profile/orders',
              }
            )}
          >
            История заказов
          </NavLink>
        </li>
        <li className={cn(styles.list__item)}>
          <NavLink
            to={'/sigh-out'}
            className={cn(
              styles.link,
              'text',
              'text_type_main-medium',
              'text_color_inactive',
              {
                [styles.link_active]: location.pathname === '/profile/orders',
              }
            )}
          >
            Выход
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default ProfileNav
