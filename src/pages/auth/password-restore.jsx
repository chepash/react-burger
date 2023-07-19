import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'

function PasswordRestore() {
  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} action="">
        <h1 className={cn('text text_type_main-medium', 'mb-6')}>
          Восстановление пароля
        </h1>

        <div className={cn(styles.list__item)}>
          <Input
            type={'email'}
            placeholder={'Укажите E-mail'}
            // onChange={(e) => setValue(e.target.value)}
            // value={value}
            name={'email'}
            error={false}
            // ref={inputRef}
            // onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            // extraClass="ml-1"
          />
        </div>

        <Button htmlType="button" type="primary" size="medium">
          Восстановить
        </Button>

        <div className={cn(styles.link__wrapper, 'mt-20')}>
          <p
            className={cn(
              styles.text,
              'mp-4',
              'text text_type_main-default text_color_inactive'
            )}
          >
            Вспомнили пароль?
          </p>
          <Link
            to={'/login'}
            className={cn(styles.link, 'text text_type_main-default')}
          >
            Войти
          </Link>
        </div>
      </form>
    </main>
  )
}

export default PasswordRestore
