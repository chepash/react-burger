import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ROUTE_FEED, ROUTE_HOME, ROUTE_PROFILE } from '../../utils/constants'
import styles from './app-header.module.scss'

const AppHeader: FC = () => {
  const location = useLocation()

  const commonLinkClassNames = cn(
    styles.link,
    'mt-4 mr-5 mb-4 ml-5',
    'text',
    'text_type_main-default'
  )
  const activeLinkClassNames = cn(commonLinkClassNames, styles.link_active)
  const inactiveLinkClassNames = cn(commonLinkClassNames, 'text_color_inactive')

  return (
    <header className={cn(styles.header, 'p-4')}>
      <div className={styles.header__container}>
        <nav className={cn(styles.header__box)}>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <NavLink
                to={ROUTE_HOME}
                className={({ isActive }) =>
                  isActive ? activeLinkClassNames : inactiveLinkClassNames
                }
              >
                <BurgerIcon
                  type={
                    location.pathname === ROUTE_HOME ? 'primary' : 'secondary'
                  }
                />
                <label className={cn(styles.link__label, 'ml-2')}>
                  Конструктор
                </label>
              </NavLink>
            </li>
            <li className={cn(styles.list__item, 'ml-2')}>
              <NavLink
                to={ROUTE_FEED}
                className={({ isActive }) =>
                  isActive ? activeLinkClassNames : inactiveLinkClassNames
                }
              >
                <ListIcon
                  type={
                    location.pathname === ROUTE_FEED ? 'primary' : 'secondary'
                  }
                />
                <label className={cn(styles.link__label, 'ml-2')}>
                  Лента заказов
                </label>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={cn(styles.header__box)}>
          <Logo />
        </div>
        <div className={cn(styles.header__box)}>
          <div className={styles.link__wrap}>
            <NavLink
              to={ROUTE_PROFILE}
              className={({ isActive }) =>
                isActive ? activeLinkClassNames : inactiveLinkClassNames
              }
            >
              <ProfileIcon
                type={
                  location.pathname.includes(ROUTE_PROFILE)
                    ? 'primary'
                    : 'secondary'
                }
              />
              <label className={cn(styles.link__label, 'ml-2')}>
                Личный кабинет
              </label>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
