import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import styles from './profile.module.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Profile() {
  const location = useLocation()

  return (
    <main className={cn(styles.main, 'pl-5 pr-5', 'mt-30')}>
      <section
        aria-label="Навигация по личному кабиенту"
        className={cn(styles.section)}
      >
        <nav>
          <ul className={cn(styles.list, styles.list_type_nav)}>
            <li className={cn(styles.list__item, styles.list__item_type_nav)}>
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
            <li className={cn(styles.list__item, styles.list__item_type_nav)}>
              <NavLink
                to={'/profile/orders'}
                className={cn(
                  styles.link,
                  'text',
                  'text_type_main-medium',
                  'text_color_inactive',
                  {
                    [styles.link_active]:
                      location.pathname === '/profile/orders',
                  }
                )}
              >
                История заказов
              </NavLink>
            </li>
            <li className={cn(styles.list__item, styles.list__item_type_nav)}>
              <NavLink
                className={cn(
                  styles.link,
                  'text',
                  'text_type_main-medium',
                  'text_color_inactive',
                  {
                    [styles.link_active]:
                      location.pathname === '/profile/orders',
                  }
                )}
              >
                Выход
              </NavLink>
            </li>
          </ul>
        </nav>
        <p
          className={cn(
            'mt-20',
            'text',
            'text_type_main-default',
            'text_color_inactive'
          )}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </section>
      <section
        aria-label="Изменение персональных данных"
        className={cn(styles.section)}
      >
        <form className={styles.form} action="">
          <ul className={styles.list}>
            <li className={cn(styles.list__item)}>
              <Input
                type={'text'}
                placeholder={'Имя'}
                // onChange={(e) => setValue(e.target.value)}
                // value={value}
                name={'email'}
                error={false}
                // ref={inputRef}
                // onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                // extraClass="ml-1"
                icon={'EditIcon'}
              />
            </li>
            <li className={cn(styles.list__item)}>
              <Input
                type={'email'}
                placeholder={'Логин'}
                // onChange={(e) => setValue(e.target.value)}
                // value={value}
                name={'email'}
                error={false}
                // ref={inputRef}
                // onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                // extraClass="ml-1"
                icon={'EditIcon'}
              />
            </li>
            <li className={cn(styles.list__item)}>
              <Input
                type={'password'}
                placeholder={'Пароль'}
                // onChange={(e) => setValue(e.target.value)}
                // value={value}
                name={'password'}
                error={false}
                // ref={inputRef}
                // onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                // extraClass="ml-1"
                icon={'EditIcon'}
              />
            </li>
          </ul>
        </form>
      </section>
    </main>
  )
}

export default Profile
