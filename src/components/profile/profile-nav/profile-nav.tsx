import cn from 'classnames'
import { FC } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { handleLogoutThunk } from '../../../services/thunks/handle-logout-thunk'
import { useDispatch } from '../../../services/types/store'
import {
  ROUTE_LOGIN,
  ROUTE_PROFILE,
  ROUTE_PROFILE_ORDERS,
} from '../../../utils/constants'
import styles from './profile-nav.module.scss'

const ProfileNav: FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnLogoutClick = async () => {
    await dispatch(handleLogoutThunk())
    navigate(ROUTE_LOGIN)
  }

  return (
    <nav className={cn(styles.nav)}>
      <ul className={cn(styles.list)}>
        <li className={cn(styles.list__item)}>
          <Link
            to={ROUTE_PROFILE}
            className={cn(
              styles.link,
              'text',
              'text_type_main-medium',
              'text_color_inactive',
              {
                [styles.link_active]: location.pathname === ROUTE_PROFILE,
              }
            )}
          >
            Профиль
          </Link>
        </li>
        <li className={cn(styles.list__item)}>
          <NavLink
            to={ROUTE_PROFILE_ORDERS}
            className={cn(
              styles.link,
              'text',
              'text_type_main-medium',
              'text_color_inactive',
              {
                [styles.link_active]:
                  location.pathname === ROUTE_PROFILE_ORDERS,
              }
            )}
          >
            История заказов
          </NavLink>
        </li>
        <li className={cn(styles.list__item)}>
          <button
            onClick={handleOnLogoutClick}
            className={cn(
              styles.link,
              'text',
              'text_type_main-medium',
              'text_color_inactive'
            )}
          >
            Выход
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default ProfileNav
