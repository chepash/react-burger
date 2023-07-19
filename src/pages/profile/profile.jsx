import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import ProfileNav from '../../components/profile-nav/profile-nav'
import styles from './profile.module.scss'

function Profile() {
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
