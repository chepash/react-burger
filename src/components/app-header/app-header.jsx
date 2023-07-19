import React, { useState } from 'react'
import cn from 'classnames'
import styles from './app-header.module.scss'
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, NavLink, useLocation } from 'react-router-dom'

const AppHeader = () => {
  const location = useLocation()

  return (
    <header className={cn(styles.header, 'p-4')}>
      <div className={styles.header__container}>
        <nav className={cn(styles.header__box)}>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? cn(
                        styles.link,
                        'mt-4 mr-5 mb-4 ml-5',
                        'text text_type_main-default',
                        styles.link_active
                      )
                    : cn(
                        styles.link,
                        'mt-4 mr-5 mb-4 ml-5',
                        'text text_type_main-default',
                        'text_color_inactive'
                      )
                }
              >
                <BurgerIcon
                  type={location.pathname === '/' ? 'primary' : 'secondary'}
                />
                <label className={cn(styles.link__label, 'ml-2')}>
                  Конструктор
                </label>
              </NavLink>
            </li>
            <li className={cn(styles.list__item, 'ml-2')}>
              <NavLink
                to="/profile/orders"
                className={({ isActive }) =>
                  isActive
                    ? cn(
                        styles.link,
                        'mt-4 mr-5 mb-4 ml-5',
                        'text text_type_main-default',
                        styles.link_active
                      )
                    : cn(
                        styles.link,
                        'mt-4 mr-5 mb-4 ml-5',
                        'text text_type_main-default',
                        'text_color_inactive'
                      )
                }
              >
                <ListIcon
                  type={
                    location.pathname === '/profile/orders'
                      ? 'primary'
                      : 'secondary'
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
            <Link
              to="/profile"
              // callback ({isActive})=>{} не подходит так как срабатывает и на "/profile/orders"
              className={cn(
                styles.link,
                'mt-4 mr-5 mb-4 ml-5',
                'text text_type_main-default',
                'text_color_inactive',
                {
                  [styles.link_active]: location.pathname === '/profile',
                }
              )}
            >
              <ProfileIcon
                type={
                  location.pathname === '/profile' ? 'primary' : 'secondary'
                }
              />
              <label className={cn(styles.link__label, 'ml-2')}>
                Личный кабинет
              </label>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
